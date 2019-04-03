import React from 'react';
import { Text, Icon } from 'components';
import cx from 'classnames';

const Time = React.memo(({ validateAndAttemptSetRequestedAt, time }) => {
  return (
    <div
      className={cx('p_25', {
        'bg-color-gray-light': time.isSelected
      })}
      onClick={() => {
        validateAndAttemptSetRequestedAt(time.jsDate);
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
            className="circle EditServiceTypeTime__icon"
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
    orderableTimesAsJSDates,
    today,
    tomorrow,
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
        <Text size={'small'} className="bold uppercase">
          {Language.t('editServiceTypeTime.header')}
        </Text>

        {!!firstOrderableDayIsToday && (
          <div className="EditServiceTypeTime__border pt1 bg-color-white col-12 flex flex-row">
            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-1">
              <Text size={'small'} className="bold">
                {Language.t('editServiceTypeTime.today')}
              </Text>
              <Text size={'small'}>{today.format}</Text>
            </div>

            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-2">
              <Text>{Language.t('editServiceTypeTime.sorry')}</Text>
              <Text>{Language.t('editServiceTypeTime.noTimesToday')}</Text>
            </div>
          </div>
        )}

        {!!orderableTimesAsJSDates && !!orderableTimesAsJSDates.length && (
          <div className="EditServiceTypeTime__border pt1 bg-color-white col-12 flex flex-row ">
            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-1">
              <Text size={'small'} className="bold">
                {currentDayDescription()}
              </Text>
              <Text size={'small'}>{firstOrderableDayLongWeekday}</Text>
            </div>
            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-2">
              {orderableTimesAsJSDates.map(time => (
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
