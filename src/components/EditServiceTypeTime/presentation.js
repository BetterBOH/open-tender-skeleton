import React from 'react';
import { Text, Icon } from 'components';
import cx from 'classnames';

const Time = React.memo(({ validateAndAttemptSetRequestedAt, time }) => {
  return (
    <div
      className={cx('EditServiceTypeTime__row p_25', {
        'bg-color-gray-light': time.isSelected
      })}
      onClick={() => {
        validateAndAttemptSetRequestedAt(time.isoDate);
      }}
    >
      <div className="flex flex-row justify-between items-center">
        <Text
          className={cx('p_25', {
            bold: time.isSelected
          })}
        >
          {time.format}
        </Text>
        {time.isSelected && (
          <Icon
            fill="white"
            icon="Check"
            className="EditServiceTypeTime__icon circle "
          />
        )}
      </div>
    </div>
  );
});

const EditServiceTypeTime = React.memo(
  ({
    localesContext,
    firstOrderableDayLongWeekday,
    orderableTimesFormatted,
    today,
    firstOrderableDayIsToday,
    firstOrderableDayIsTomorrow,
    validateAndAttemptSetRequestedAt
  }) => {
    const { Language } = localesContext;

    const currentDayDescription = () => {
      if (firstOrderableDayIsToday)
        return Language.t('editServiceTypeTime.today');
      if (firstOrderableDayIsTomorrow)
        return Language.t('editServiceTypeTime.tomorrow');
      return Language.t('editServiceTypeTime.nextAvailableDay');
    };

    return (
      <div className="EditServiceTypeTime__border p1 bg-color-white col-12">
        <Text size={'small'} className="bold uppercase color-gray-dark pb1">
          {Language.t('editServiceTypeTime.header')}
        </Text>
        {!firstOrderableDayIsToday && (
          <div className="pt1 bg-color-white col-12 flex flex-row EditServiceTypeTime__no-times-container">
            <div className="bg-color-white flex flex-col flex-1">
              <Text size={'small'} className="bold pb_5">
                {Language.t('editServiceTypeTime.today')}
              </Text>
              <Text className="color-gray-dark" size={'small'}>
                {today.format}
              </Text>
            </div>

            <div className="bg-color-white flex flex-col flex-2 pb1">
              <Text className="color-red-error">
                {Language.t('editServiceTypeTime.sorry')}
              </Text>
              <Text className="color-red-error">
                {Language.t('editServiceTypeTime.noTimesToday')}
              </Text>
            </div>
          </div>
        )}
        {!!orderableTimesFormatted && !!orderableTimesFormatted.length && (
          <div className="pt1 bg-color-white col-12 flex flex-row ">
            <div className="bg-color-white flex flex-col flex-1">
              <Text size={'small'} className="bold pb_5">
                {currentDayDescription()}
              </Text>
              <Text className="color-gray-dark" size={'small'}>
                {firstOrderableDayLongWeekday}
              </Text>
            </div>
            <div className="bg-color-white flex flex-col flex-2">
              {orderableTimesFormatted.map(time => (
                <Time
                  validateAndAttemptSetRequestedAt={
                    validateAndAttemptSetRequestedAt
                  }
                  time={time}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default EditServiceTypeTime;
