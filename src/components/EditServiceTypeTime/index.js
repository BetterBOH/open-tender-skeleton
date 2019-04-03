import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import orderableDatesAndTimes from 'state/selectors/orderableDatesAndTimes';
import { validateAndAttemptSetRequestedAt } from 'state/actions/orderActions';

class EditServiceTypeTime extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  validateAndAttemptSetRequestedAt = requestedAt => {
    this.props.actions.validateAndAttemptSetRequestedAt(requestedAt);
  };

  render() {
    const { localesContext, orderableDatesAndTimes } = this.props;
    const {
      currentRequestedTime,
      currentOrderRequestedDay,
      currentOrderRequestedTime,
      requestedDay,
      requestedTime,
      firstOrderableDay,
      lastOrderableDay,
      orderableTimes,
      today,
      tomorrow,
      firstOrderableDayIsToday,
      firstOrderableDayIsTomorrow
    } = orderableDatesAndTimes;

    // The Date and Time pickers
    // expect dates/times as JS Dates
    // so we convert them here
    // The Date and Time pickers
    // expect dates/times as JS Dates
    // so we convert them here
    const firstOrderableDayLongWeekday = firstOrderableDay
      .setZone('local', { keepLocalTime: true })
      .toLocaleString({ weekday: 'long', month: 'long', day: 'numeric' });
    const currentRequestedDayAsJSDate = currentOrderRequestedDay
      .setZone('local', { keepLocalTime: true })
      .toJSDate();
    const currentRequestedTimeAsJSDate = currentOrderRequestedTime
      .setZone('local', { keepLocalTime: true })
      .toJSDate();
    const orderableTimesAsJSDates = orderableTimes.map(time => {
      const timeToJSDate = time
        .setZone('local', { keepLocalTime: true })
        .toJSDate();
      const isCurrentTime =
        currentRequestedDayAsJSDate.getTime() === timeToJSDate.getTime() &&
        currentRequestedTimeAsJSDate.getTime() === timeToJSDate.getTime();
      return {
        format: time
          .setZone('local', { keepLocalTime: true })
          .toLocaleString({ hour: 'numeric', minute: 'numeric' }),
        jsDate: time
          .setZone('local', { keepLocalTime: true })
          .toUTC()
          .toISO(),
        isSelected: isCurrentTime
      };
    });

    return RegistryLoader(
      {
        localesContext,
        firstOrderableDayLongWeekday,
        orderableTimesAsJSDates,
        today,
        tomorrow,
        firstOrderableDayIsToday,
        firstOrderableDayIsTomorrow,
        validateAndAttemptSetRequestedAt: this.validateAndAttemptSetRequestedAt
      },
      'components.EditServiceTypeTime',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  orderableDatesAndTimes: orderableDatesAndTimes(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateAndAttemptSetRequestedAt
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withBrand(withLocales(EditServiceTypeTime)));
