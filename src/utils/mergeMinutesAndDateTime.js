import { Duration, DateTime } from 'luxon';

const TIME_FORMAT = 'h:mm';

export default (minutes, dateObj, timezoneForCurrentLocation) => {
  const currentRequestedDayAttributes = dateObj.c;

  const { day, month, year } = currentRequestedDayAttributes;

  const minutesAsDuration = Duration.fromObject({ minutes }).toFormat(
    TIME_FORMAT
  );
  const todayWithTime = DateTime.fromFormat(minutesAsDuration, TIME_FORMAT);

  const { hour, minute, second, millisecond } = todayWithTime;

  const Local = DateTime.local().setZone(timezoneForCurrentLocation);

  return Local.set({
    day,
    month,
    year,
    hour,
    minute,
    second,
    millisecond
  });
};
