import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import orderableDatesAndTimes from 'state/selectors/orderableDatesAndTimes';

class EditServiceTypeTime extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { localesContext, orderableDatesAndTimes } = this.props;
    const {
      todayIsOrderable,
      firstOrderableDay,
      // lastOrderderableDay,
      // currentRequestedDay,
      currentRequestedTime,
      orderableTimes,
      today
    } = orderableDatesAndTimes;

    console.log(
      'orderableDatesAndTimes, orderableDatesAndTimes',
      orderableDatesAndTimes
    );
    // The Date and Time pickers
    // expect dates/times as JS Dates
    // so we convert them here
    // The Date and Time pickers
    // expect dates/times as JS Dates
    // so we convert them here
    const firstOrderableDayLongWeekday = firstOrderableDay
      .setZone('local', { keepLocalTime: true })
      .toLocaleString({ weekday: 'long', month: 'long', day: 'numeric' });
    // const currentRequestedDayAsJSDate = currentRequestedDay
    //   .setZone('local', { keepLocalTime: true })
    //   .toJSDate();
    // const currentRequestedTimeAsJSDate = currentRequestedTime
    //   .setZone('local', { keepLocalTime: true })
    //   .toJSDate();
    const orderableTimesAsJSDates = orderableTimes.map(time => {
      return {
        format: time
          .setZone('local', { keepLocalTime: true })
          .toLocaleString({ hour: 'numeric', minute: 'numeric' }),
        jsDate: time.setZone('local', { keepLocalTime: true }).toJSDate()
      };
    });

    console.log({
      orderableDatesAndTimes,
      todayIsOrderable,
      firstOrderableDayLongWeekday,
      orderableTimesAsJSDates
    });
    return RegistryLoader(
      {
        localesContext,
        todayIsOrderable,
        firstOrderableDayLongWeekday,
        orderableTimesAsJSDates,
        today
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
  actions: bindActionCreators({}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withBrand(withLocales(EditServiceTypeTime)));
