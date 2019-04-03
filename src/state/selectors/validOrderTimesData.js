import { createSelector } from 'reselect';
import { DateTime } from 'luxon';

import get from 'utils/get';
import { ASAP, PICKUP } from 'constants/OpenTender';
import { DATE_HYPHENATED } from 'constants/DateTimeFormats';

export default createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => get(state, 'openTender.data.locations', {}),
  (orderData, locations) => {
    const currentOrderLocationId = get(orderData, 'location_id');
    const locationsById = get(locations, 'locationsById', {});

    if (!currentOrderLocationId) return {};

    const currentOrderLocation = get(
      locationsById,
      `${currentOrderLocationId}`
    );

    if (!currentOrderLocation) return {};

    const currentOrderRequestedAt = get(orderData, 'requested_at', ASAP);
    const currentOrderServiceType = get(orderData, 'service_type', PICKUP);

    /**
     * daysAheadForServiceType
     *
     * In the case the current order is of order_type 'olo'
     * this will be a number indicating the number of days ahead
     * a customer can order for
     */
    const daysAheadForServiceType = get(
      currentOrderLocation,
      `days_ahead.${currentOrderServiceType}`
    );

    /**
     * firstAvailableTimeForServiceType
     *
     * this object represents
     * the first available day/time/daypart
     * an order can be placed for
     */
    const firstAvailableTimeForServiceType = get(
      currentOrderLocation,
      `first_times.${currentOrderServiceType}`
    );

    /**
     * validTimesForServiceType
     *
     * this includes the times an order
     * can be placed, by daypart
     * based on the current orders service_type
     */
    const validTimesForServiceType = get(
      currentOrderLocation,
      `valid_times.${currentOrderServiceType}`
    );

    /**
     * A Luxon DateTime object based on the first
     * availabler day an order can be placed for that
     * service_type
     */
    const firstOrderableDayForServiceType = DateTime.fromFormat(
      get(firstAvailableTimeForServiceType, 'date'),
      DATE_HYPHENATED
    );

    /**
     * A Luxon DateTime object based on the first
     * available day + the days ahead an order can placed for that
     * service_type.
     *
     * In the case of catering, this will be null
     */
    const lastOrderableDayForServiceType = daysAheadForServiceType
      ? firstOrderableDayForServiceType.plus({ days: daysAheadForServiceType })
      : null;

    return {
      currentOrderRequestedAt,
      firstAvailableTimeForServiceType,
      validTimesForServiceType,
      firstOrderableDayForServiceType,
      lastOrderableDayForServiceType
    };
  }
);
