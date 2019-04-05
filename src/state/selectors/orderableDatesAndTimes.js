import { createSelector } from 'reselect';
import { DateTime } from 'luxon';

import get from 'utils/get';
import convertDateTimeToMinutes from 'utils/convertDateTimeToMinutes';
import convertMinutesToDateTime from 'utils/convertMinutesToDateTime';

import {
  validOrderTimesData,
  timezoneForCurrentLocation
} from 'state/selectors';

import { ASAP } from 'constants/OpenTender';
import { TIME_WITH_MERIDIEM } from 'constants/DateTimeFormats';

export default createSelector(
  state => validOrderTimesData(state),
  state => timezoneForCurrentLocation(state),
  (
    {
      currentOrderRequestedAt,
      firstAvailableTimeForServiceType,
      validTimesForServiceType,
      firstOrderableDayForServiceType,
      lastOrderableDayForServiceType
    },
    timezoneForCurrentLocation
  ) => {
    const now = DateTime.local();

    /**
     * If the order's requested_at is set to asap
     * we set currentOrderRequestedDay to the first available
     * day for the requestedt service type
     * otherwise we set it to the day  specified by
     * the current order's requested_at
     */
    const currentOrderRequestedDay =
      currentOrderRequestedAt === ASAP
        ? firstOrderableDayForServiceType
        : DateTime.fromISO(currentOrderRequestedAt);

    /**
     * If the order's requested_at is set to asap
     * we set currentOrderRequestedTime to the first available
     * time for the requested service type
     * otherwise we set it to the time specified by
     * the current order's requested_at
     */
    const currentOrderRequestedTime =
      currentOrderRequestedAt === ASAP
        ? DateTime.fromFormat(
            get(firstAvailableTimeForServiceType, 'time'),
            TIME_WITH_MERIDIEM,
            { zone: timezoneForCurrentLocation }
          )
        : DateTime.fromISO(currentOrderRequestedAt, {
            zone: timezoneForCurrentLocation
          });

    const currentOrderRequestedDayAsWeekday = currentOrderRequestedDay.weekdayLong.toLowerCase();
    const allTimesForRequestedDay =
      validTimesForServiceType[currentOrderRequestedDayAsWeekday];

    const requestedAtIsInTheFutureAndIsNotToday =
      now < currentOrderRequestedDay &&
      now.day !== currentOrderRequestedDay.day;

    const orderableTimesForRequestedDayTime = _orderableTimesForRequestedDayTime(
      allTimesForRequestedDay,
      currentOrderRequestedTime,
      timezoneForCurrentLocation,
      requestedAtIsInTheFutureAndIsNotToday
    );
    const dateWhereMenuIs = DateTime.local().setZone(
      timezoneForCurrentLocation
    );
    const isoDateWhereMenuIs = DateTime.utc(
      dateWhereMenuIs.year,
      dateWhereMenuIs.month,
      dateWhereMenuIs.day
    ).toISODate();
    const todayIsOrderable =
      get(firstAvailableTimeForServiceType, 'date') === isoDateWhereMenuIs;

    return {
      requestedDay: currentOrderRequestedDay,
      requestedTime: currentOrderRequestedTime,
      firstOrderableDay: firstOrderableDayForServiceType,
      lastOrderableDay: lastOrderableDayForServiceType,
      orderableTimes: orderableTimesForRequestedDayTime,
      todayIsOrderable
    };
  }
);

/**
 * Private
 */

function _orderableTimesForRequestedDayTime(
  daypartsAndTimes,
  requestedDateTime,
  timezoneForCurrentLocation,
  requestIsFuture = false
) {
  const requestedDateTimeInMinutes = convertDateTimeToMinutes(
    requestedDateTime
  );

  return daypartsAndTimes
    .filter(daypart => {
      const daypartEndMin = get(daypart, 'end_min');

      /**
       * If the requested at is in the future (e.g. not 'today')
       * we only filter dayparts based on whether they are orderable
       */
      if (requestIsFuture) {
        return daypart.is_orderable;
      }

      /**
       * Otherwise, if the requested at IS today,
       * we filter out dayparts that have either passed
       * (because their ends at in minutes is less than
       * the requested date in minutes) or because they are
       * considered not orderable
       */
      const daypartHasPassed = requestedDateTimeInMinutes > daypartEndMin;
      return daypart.is_orderable && !daypartHasPassed;
    })
    .reduce((validOrderableTimes, daypart) => {
      const orderableTimesForDaypart = get(daypart, 'times', []).filter(
        time => {
          const localTime = DateTime.local().setZone(
            timezoneForCurrentLocation
          );
          const localTimeInMins = convertDateTimeToMinutes(localTime);
          const timeInMins = get(time, 'minutes');

          /**
           * If the requested at is in the future (e.g. not 'today')
           * we only filter daypart times based on whether they are orderable
           */
          if (requestIsFuture) {
            return time.is_orderable;
          }

          /**
           * Otherwise, if the requested at IS today,
           * we filter time that are either after the current local time
           * or are considered not orderable
           */
          const timeHasPassed = localTimeInMins > timeInMins;
          return time.is_orderable && !timeHasPassed;
        }
      );
      return [...validOrderableTimes, ...orderableTimesForDaypart];
    }, [])
    .map(validTime => convertMinutesToDateTime(validTime.minutes));
}
