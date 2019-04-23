import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateTime } from 'luxon';

import { ASAP } from 'constants/OpenTender';
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

  // validateAndAttemptSetRequestedAt = requestedAt => {
  //   debugger;
  //   this.props.actions.validateAndAttemptSetRequestedAt(requestedAt);
  // };

  attemptToSetRequestedAt = requestedAt => {
    const actions = get(this, 'props.actions', {});
    const timezoneForCurrentLocation = get(
      this,
      'props.timezoneForCurrentLocation'
    );

    // If the requested at was converted to asap (SEE: componentDidUpdate)
    // we dispatch the action with the requested at as asap
    if (requestedAt === ASAP) {
      return actions.validateAndAttemptSetRequestedAt(requestedAt);
    }

    // Otherwise, the requestAt must be a valid ISO8601 DateTime string in utc.
    // Prior to converting the requestedAt to utc, we want to ensure it's Timezone is set
    // to that of the location being ordered from, so that the time is represented in the location's
    // local time, and not the local time where the customer is ordering for (e.g. a customer located in NY ordering from Tartine in SF)
    const requestedAtInLocationTimeZone = requestedAt.setZone(
      timezoneForCurrentLocation
    );
    const requestedAtInLocationTimeZoneInUTC = requestedAtInLocationTimeZone.setZone(
      'utc'
    );
    const formattedRequestedAt = `${
      requestedAtInLocationTimeZoneInUTC.toISO().split('.')[0]
    }Z`;

    return actions.validateAndAttemptSetRequestedAt(formattedRequestedAt);
  };

  handleSetRequestedDay = value => {
    console.log('value', value);
    const requestedDayAsLuxonDateTime = DateTime.fromJSDate(value);

    this.formatAndAttemptSetRequestedAt(
      requestedDayAsLuxonDateTime,
      this.props.orderableDatesAndTimes.currentOrderRequestedTime
    );
  };

  handleSetRequestedTime = value => {
    const requestedTimeAsLuxonDateTime = DateTime.fromJSDate(
      new Date(value.isoDate)
    );
    debugger;
    this.formatAndAttemptSetRequestedAt(
      this.props.orderableDatesAndTimes.currentOrderRequestedDay,
      requestedTimeAsLuxonDateTime
    );
  };

  format = (requestedDay, requestedTime) => {
    const timezoneForCurrentLocation = get(
      this,
      'props.timezoneForCurrentLocation'
    );
    const currentRequestedDayAttributes = requestedDay.c;
    const currentRequestedTimeAttributes = requestedTime.c;

    const { day, month, year } = currentRequestedDayAttributes;
    const {
      hour,
      minute,
      second,
      millisecond
    } = currentRequestedTimeAttributes;

    const Local = DateTime.local().setZone(timezoneForCurrentLocation);

    const NOW = Local;
    const requestedAt = Local.set({
      day,
      month,
      year,
      hour,
      minute,
      second,
      millisecond
    });
    return requestedAt;
  };

  formatAndAttemptSetRequestedAt = (requestedDay, requestedTime) => {
    const requestedAt = this.format(requestedDay, requestedTime);
    // If the newly requested timestamp
    // is in the current day, but has a time that is now in the past
    // we attempt to set the requested at to ASAP to ensure the new
    // requested at is the first valid time for the current day
    // otherwise we attempt to set it to the new requested at
    const diff = requestedAt.diff(NOW, ['days', 'hours', 'minutes']).toObject();

    if (diff.days === 0 && diff.hours < 0 && diff.minutes < 0) {
      return this.attemptToSetRequestedAt(ASAP);
    }
    return this.attemptToSetRequestedAt(requestedAt);
  };

  render() {
    const { localesContext, orderableDatesAndTimes } = this.props;
    const {
      orderableTimes,
      today,
      firstOrderableDayIsToday,
      firstOrderableDayIsTomorrow,
      firstOrderableDay,
      lastOrderableDay,
      currentOrderRequestedDay,
      currentOrderRequestedTime
    } = orderableDatesAndTimes;

    const currentRequestedTimeAsJSDate = currentOrderRequestedTime
      .setZone('local', { keepLocalTime: true })
      .toJSDate();

    // const firstOrderableDayLongWeekday = firstOrderableDay
    //   .setZone('local', { keepLocalTime: true })
    //   .toLocaleString({ weekday: 'long', month: 'long', day: 'numeric' });

    const dayAndTime = this.format(
      currentOrderRequestedDay,
      currentOrderRequestedTime
    )
      .setZone('local', { keepLocalTime: true })
      .toJSDate();

    const orderableTimesFormatted = orderableTimes.map(time => {
      const timeToJSDate = time
        .setZone('local', { keepLocalTime: true })
        .toJSDate();
      console.log(
        'currentOrderRequestedTime, currentOrderRequestedTime',
        currentOrderRequestedTime
      );

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
        firstOrderableDay: firstOrderableDay.toISO(),
        lastOrderableDay: lastOrderableDay.toISO(),
        currentOrderRequestedDay: currentOrderRequestedDay.toISO(),
        currentOrderRequestedTime: currentOrderRequestedTime.toISO(),
        localesContext,
        // firstOrderableDayLongWeekday,
        orderableTimesFormatted,
        today,
        // firstOrderableDayIsToday,
        // firstOrderableDayIsTomorrow,
        handleSetRequestedTime: this.handleSetRequestedTime,
        handleSetRequestedDay: this.handleSetRequestedDay
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
