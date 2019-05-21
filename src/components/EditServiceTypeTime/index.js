import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateTime } from 'luxon';
import { setRequestedAt } from 'brandibble-redux';

import { ASAP } from 'constants/OpenTender';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import orderableDatesAndTimes from 'state/selectors/orderableDatesAndTimes';
import LuxonModel from 'constants/Models/LuxonModel';
import { setModal } from 'state/actions/ui/modalActions';
import ModalTypes from 'constants/ModalTypes';
import { INVALID_ITEMS_POINTER } from 'constants/OpenTender';

class EditServiceTypeTime extends PureComponent {
  static propTypes = {
    orderableDatesAndTimes: PropTypes.shape({
      orderableTimes: PropTypes.arrayOf[LuxonModel],
      firstOrderableDay: LuxonModel,
      lastOrderableDay: LuxonModel,
      currentOrderRequestedDay: LuxonModel,
      currentOrderRequestedTime: LuxonModel,
      timezoneForCurrentLocation: PropTypes.string
    }),
    className: PropTypes.string
  };

  static defaultProps = {
    orderableDatesAndTimes: null,
    className: ''
  };

  attemptToSetRequestedAt = requestedAt => {
    const actions = get(this, 'props.actions', {});
    const timezoneForCurrentLocation = get(
      this,
      'props.timezoneForCurrentLocation'
    );
    const orderRef = get(this, 'props.orderRef');

    const setRequestedAtCallback = (err, proceed) => {
      const errors = get(err, 'errors');
      const itemsAreInvalid = errors.find(
        error => get(error, 'source.pointer') === INVALID_ITEMS_POINTER
      );

      if (itemsAreInvalid) {
        return actions.setModal(ModalTypes.INVALID_ITEMS_IN_CART, {
          errors,
          handleAcceptClick: proceed
        });
      }
    };

    // If the requested at was converted to asap (SEE: componentDidUpdate)
    // we dispatch the action with the requested at as asap
    if (requestedAt === ASAP) {
      return actions.setRequestedAt(
        orderRef,
        ASAP,
        null,
        setRequestedAtCallback
      );
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

    return actions.setRequestedAt(
      orderRef,
      formattedRequestedAt,
      null,
      setRequestedAtCallback
    );
  };

  handleSetRequestedDay = value => {
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
    return this.attemptToSetRequestedAt(requestedTimeAsLuxonDateTime);
  };

  formatAndAttemptSetRequestedAt = (requestedDay, requestedTime) => {
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
    const { orderableDatesAndTimes, className, serviceType } = this.props;
    const {
      orderableTimes,
      firstOrderableDay,
      lastOrderableDay,
      currentOrderRequestedDay,
      currentOrderRequestedTime
    } = orderableDatesAndTimes;

    const currentRequestedTimeAsJSDate = currentOrderRequestedTime
      .setZone('local', { keepLocalTime: true })
      .toJSDate();

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
        className,
        orderableTimesFormatted,
        serviceType,
        firstOrderableDay: firstOrderableDay.toISO(),
        lastOrderableDay: lastOrderableDay.toISO(),
        currentOrderRequestedDay: currentOrderRequestedDay.toISO(),
        handleSetRequestedTime: this.handleSetRequestedTime,
        handleSetRequestedDay: this.handleSetRequestedDay
      },
      'components.EditServiceTypeTime',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  orderableDatesAndTimes: orderableDatesAndTimes(state),
  orderRef: get(state, 'openTender.session.order.ref'),
  serviceType: get(state, 'openTender.session.order.orderData.service_type')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setRequestedAt,
      setModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditServiceTypeTime);
