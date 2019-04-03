import React from 'react';
import { Text, Icon } from 'components';

const Time = React.memo(({ time }) => {
  console.log('time', time);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <Text>{time.format}</Text>
        <Icon
          fill="white"
          icon="Check"
          className="circle EditServiceTypeTime__icon"
        />
      </div>
    </div>
  );
});

const EditServiceTypeTime = React.memo(
  ({
    localesContext,
    todayIsOrderable,
    firstOrderableDayLongWeekday,
    orderableTimesAsJSDates,
    today
  }) => {
    const { Language } = localesContext;
    console.log('orderableTimesAsJSDates', orderableTimesAsJSDates);
    return (
      <div className="EditServiceTypeTime__border bg-color-white col-12">
        <Text>{Language.t('editServiceTypeTime.header')}</Text>

        {!todayIsOrderable && (
          <div className="EditServiceTypeTime__border bg-color-white col-12 flex flex-row">
            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-1">
              <Text>{Language.t('editServiceTypeTime.today')}</Text>
              <Text>{today}</Text>
            </div>

            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-1">
              <Text>{Language.t('editServiceTypeTime.sorry')}</Text>
              <Text>{Language.t('editServiceTypeTime.noTimesToday')}</Text>
            </div>
          </div>
        )}

        {todayIsOrderable && (
          <div className="EditServiceTypeTime__border bg-color-white col-12 flex flex-row ">
            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-1">
              <Text>{Language.t('editServiceTypeTime.tomorrow')}</Text>
              <Text>{firstOrderableDayLongWeekday}</Text>
            </div>
            <div className="EditServiceTypeTime__border bg-color-white flex flex-col flex-1">
              {orderableTimesAsJSDates.map(time => (
                <Time time={time} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default EditServiceTypeTime;
