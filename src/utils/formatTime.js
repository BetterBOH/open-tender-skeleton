import { DateTime } from 'luxon';
import { DATE_AND_TIME } from 'constants/DateTimeFormats';
import { ASAP } from 'constants/OpenTender';

const isoToDateAndTime = time => {
  if (time === ASAP) return ASAP;
  try {
    return DateTime.fromISO(time).toFormat(DATE_AND_TIME);
  } catch (e) {
    return ASAP;
  }
};

export { isoToDateAndTime };
