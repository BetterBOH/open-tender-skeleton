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
import LuxonModel from 'constants/Models/LuxonModel';

class EditServiceTypeTime extends PureComponent {
  static propTypes = {
    orderableDatesAndTimes: PropTypes.shape({
      orderableTimes: PropTypes.arrayOf[LuxonModel],
      firstOrderableDay: LuxonModel,
      currentOrderRequestedTime: LuxonModel,
      today: PropTypes.shape({
        format: PropTypes.string,
        isoDate: PropTypes.string
      }),
      firstOrderableDayIsToday: PropTypes.bool,
      firstOrderableDayIsTomorrow: PropTypes.bool
    })
  };

  static defaultProps = {
    orderableDatesAndTimes: null
  };

  validateAndAttemptSetRequestedAt = requestedAt => {
    this.props.actions.validateAndAttemptSetRequestedAt(requestedAt);
  };

  render() {
    const { localesContext, orderableDatesAndTimes } = this.props;
    const {
      orderableTimes,
      firstOrderableDay,
      currentOrderRequestedTime,
      today,
      firstOrderableDayIsToday,
      firstOrderableDayIsTomorrow
    } = orderableDatesAndTimes;

    const currentRequestedTimeAsJSDate = currentOrderRequestedTime
      .setZone('local', { keepLocalTime: true })
      .toJSDate();

    const firstOrderableDayLongWeekday = firstOrderableDay
      .setZone('local', { keepLocalTime: true })
      .toLocaleString({ weekday: 'long', month: 'long', day: 'numeric' });

    const orderableTimesFormatted = orderableTimes.map(time => {
      const timeToJSDate = time
        .setZone('local', { keepLocalTime: true })
        .toJSDate();

      const isCurrentTime =
        currentRequestedTimeAsJSDate.getTime() === timeToJSDate.getTime();

      return {
        format: time
          .setZone('local', { keepLocalTime: true })
          .toLocaleString({ hour: 'numeric', minute: 'numeric' }),
        isoDate: time
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
        orderableTimesFormatted,
        today,
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
