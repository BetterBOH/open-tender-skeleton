import { createSelector } from 'reselect';
import { DateTime } from 'luxon';
import get from 'utils/get';
import { timezoneForCurrentLocation } from 'state/selectors';
import {
  currentLocation,
  menuStatusForOrder,
  MenuStatusCodes
} from 'brandibble-redux';
import { DATE_AND_TIME } from 'constants/DateTimeFormats';

const {
  FUTURE_ORDER_REQUEST,
  ASAP_ORDER_REQUEST,
  INVALID_REQUESTED_AT,
  REQUESTED_AT_HAS_PASSED,
  ORDERING_FOR_FIRST_AVAILABLE_VALID_TIME,
  ORDERING_FOR_FUTURE_DAYPART
} = MenuStatusCodes;

export default createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => currentLocation(state.openTender),
  state => timezoneForCurrentLocation(state),
  state => menuStatusForOrder(state.openTender),
  (
    currentOrderData,
    currentLocation,
    currentLocationTimezone,
    menuStatusForOrder
  ) => {
    const { statusCode, meta } = menuStatusForOrder;

    switch (statusCode) {
      /**
       * FUTURE_ORDER_REQUEST
       *
       * This case is common for both 'olo' and 'catering' orders.
       * Triggered when a user manually selects an order for the future.
       * "The future" can also mean, this is the first orderable time, but the
       * user has specifally opted in to a future order (wantsFutureOrder = true)
       */
      case FUTURE_ORDER_REQUEST: {
        const validOrderTimeForOrder = get(
          menuStatusForOrder,
          'meta.validOrderTimeForOrder'
        );
        const { daypart, utc } = validOrderTimeForOrder;
        const formattedOrderDateTime = _formatUtc(utc, currentLocationTimezone);

        return `Ordering for ${daypart} ${formattedOrderDateTime}`;
      }
      /**
       * ORDERING_FOR_FIRST_AVAILABLE_VALID_TIME
       *
       * This case is pretty common for catering orders. It's
       * sort of the equivalent of an 'asap' order, due the catering
       * order's not accepting 'asap' as a valid requested at.
       *
       * If the currentDaypart is not orderable, we show the customer the reason why they
       * are ordering for a future time (if it can be determined). With catering orders this
       * often means orders must be placed a certain number of days in advance
       */
      case ORDERING_FOR_FIRST_AVAILABLE_VALID_TIME: {
        const currentDaypart = get(meta, 'currentDaypart');
        const currentDaypartIsOrderable = get(
          meta,
          'currentDaypartIsOrderable'
        );
        const validOrderTimeForOrder = get(meta, 'validOrderTimeForOrder');
        const { daypart, utc } = validOrderTimeForOrder;
        const formattedOrderDateTime = _formatUtc(utc, currentLocationTimezone);

        if (!currentDaypartIsOrderable) {
          const reasonCurrentDaypartIsNotOrderable = _currentDaypartErrorReason(
            currentDaypart
          );

          if (
            !!reasonCurrentDaypartIsNotOrderable &&
            reasonCurrentDaypartIsNotOrderable.length
          ) {
            return `${reasonCurrentDaypartIsNotOrderable} You are ordering for the first available time: ${daypart} ${formattedOrderDateTime}.`;
          }
        }

        return `Ordering for next available timeslot: ${daypart} ${formattedOrderDateTime}`;
      }
      /**
       * ORDERING_FOR_FUTURE_DAYPART
       *
       * In this scenario, the customer has NOT opted in to ordering
       * ahead for a future time, so we notify them.
       */
      case ORDERING_FOR_FUTURE_DAYPART: {
        const unorderableCurrentDaypart = get(
          menuStatusForOrder,
          'meta.unorderableCurrentDaypart'
        );
        const validOrderTimeForOrder = get(
          menuStatusForOrder,
          'meta.validOrderTimeForOrder'
        );
        const { daypart, utc } = validOrderTimeForOrder;
        const formattedOrderDateTime = _formatUtc(utc, currentLocationTimezone);
        const reasonCurrentDaypartIsNotOrderable = _currentDaypartErrorReason(
          unorderableCurrentDaypart
        );
        if (
          !!reasonCurrentDaypartIsNotOrderable &&
          reasonCurrentDaypartIsNotOrderable.length
        ) {
          return `${reasonCurrentDaypartIsNotOrderable} You are ordering ahead for ${daypart} ${formattedOrderDateTime}.`;
        }

        return `You are ordering ahead for ${daypart} ${formattedOrderDateTime}.`;
      }
      /**
       * INVALID_REQUESTED_AT or REQUESTED_AT_HAS_PASSED
       *
       * Both of these cases should be rare, as Brandibble-Redux
       * has logic built in to ensure invalid/expired requests
       * are updated to 'asap' for olo orders and the first_times for
       * requested service type for catering orders
       */
      case INVALID_REQUESTED_AT:
      case REQUESTED_AT_HAS_PASSED:
        return `Your requested time and date is invalid. Please choose a valid order time.`;
      /**
       * ASAP_ORDER_REQUEST
       *
       * This case is relatively common for olo orders only, as a catering order cannot
       * be requested for 'asap'.
       *
       * Within this case, there are a few sub cases:
       * 1. Asap order request with an unorderable currentDaypart
       *    In this case we'll look to the error status and code of the current daypart, in order to determine
       *    what to show the customer.
       * 2. Asap order request with no valid order time for order
       *    most likely means the location is currently closed (e.g. it's late night/early morning)
       * 3. Asap order with valid order time for order. (Most common)
       */
      case ASAP_ORDER_REQUEST: {
        const currentDaypart = get(menuStatusForOrder, 'meta.currentDaypart');
        const currentDaypartIsOrderable = get(
          meta,
          'currentDaypartIsOrderable'
        );
        const validOrderTimeForOrder = get(
          menuStatusForOrder,
          'meta.validOrderTimeForOrder'
        );
        const startUtc = get(currentDaypart, 'start_utc');
        const daypart = get(currentDaypart, 'daypart');

        if (!currentDaypartIsOrderable) {
          const reasonCurrentDaypartIsNotOrderable = _currentDaypartErrorReason(
            currentDaypart
          );
          if (
            !!reasonCurrentDaypartIsNotOrderable &&
            reasonCurrentDaypartIsNotOrderable.length
          ) {
            return `${reasonCurrentDaypartIsNotOrderable} You are ordering for the next available time.`;
          }
        }

        if (!validOrderTimeForOrder) {
          const formattedOrderDateTime = _formatUtc(
            startUtc,
            currentLocationTimezone
          );
          return `This location is currently closed. You are ordering for ${daypart} ${formattedOrderDateTime}`;
        }
        return `Ordering for next available time slot.`;
      }
      default:
        return null;
    }
  }
);

/** Private */

const _formatUtc = (
  utcTimeStamp,
  currentLocationTimezone,
  dateTimeFormat = DATE_AND_TIME
) => {
  if (!utcTimeStamp) return null;

  const utcAsLuxonDateTime = DateTime.fromISO(utcTimeStamp, {
    zone: currentLocationTimezone
  });

  return utcAsLuxonDateTime.toFormat(dateTimeFormat);
};

/**
 * Ocassionally, it will be important to notify the user WHY
 * they are ordering for a specific time. Often it's the result of the current daypart
 * not being orderable for on reason of another.
 */
const _currentDaypartErrorReason = currentDaypart => {
  const currentDaypartErrorCode = get(
    currentDaypart,
    'is_orderable_error_reason_code'
  );
  const currentDaypartErrorMessage = get(
    currentDaypart,
    'is_orderable_error_reason'
  );

  if (currentDaypartErrorCode) {
    switch (currentDaypartErrorCode) {
      case 101:
        return 'Location is coming soon.';
      case 102:
        return 'Location is closed.';
      case 103:
        return `Location is closed for ${currentDaypartErrorMessage}`;
      case 104:
        return `Location is temporily closed.`;
      case 105:
        return `Location is closed for the day.`;
      case 200:
      case 201:
      case 202:
        return `Location is closed.`;
      case 203:
        return `Location requires orders in advance.`;
      default:
        return null;
    }
  }
};
