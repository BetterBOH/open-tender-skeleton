import React from 'react';
import { Text, Icon } from 'components';
import cx from 'classnames';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Time = React.memo(({ handleSetRequestedTime, time }) => {
  return (
    <div
      className={cx('EditServiceTypeTime__row p_25', {
        'bg-color-gray-light': time.isSelected
      })}
      onClick={() => {
        handleSetRequestedTime(time);
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
            className="EditServiceTypeTime__icon circle"
          />
        )}
      </div>
    </div>
  );
});

const EditServiceTypeTime = React.memo(
  ({
    localesContext,
    // firstOrderableDayLongWeekday,
    orderableTimesFormatted,
    today,
    // firstOrderableDayIsToday,
    // firstOrderableDayIsTomorrow,
    firstOrderableDay,
    lastOrderableDay,
    currentOrderRequestedDay,
    currentOrderRequestedTime,
    handleSetRequestedDay,
    handleSetRequestedTime
  }) => {
    const { Language } = localesContext;

    // const currentDayDescription = () => {
    //   if (firstOrderableDayIsToday)
    //     return Language.t('editServiceTypeTime.today');
    //
    //   if (firstOrderableDayIsTomorrow)
    //     return Language.t('editServiceTypeTime.tomorrow');
    //
    //   return Language.t('editServiceTypeTime.nextAvailableDay');
    // };

    const renderCalendar = () => {
      return (
        <DatePicker
          selected={currentOrderRequestedDay}
          minDate={firstOrderableDay}
          maxDate={lastOrderableDay}
          onChange={e => {
            handleSetRequestedDay(e);
          }}
        />
      );
    };

    return (
      <div className="bg-color-white col-12 p1">
        <Text size="small" className="bold uppercase color-gray-dark pb1">
          {Language.t('editServiceTypeTime.header')}
        </Text>
        {!!orderableTimesFormatted && !!orderableTimesFormatted.length && (
          <div className="flex flex-row col-12 bg-color-white pt1">
            <div className="flex flex-col flex-1 bg-color-white">
              {renderCalendar()}
            </div>
            <div className="flex flex-col flex-2 bg-color-white">
              {orderableTimesFormatted.map(time => (
                <Time
                  handleSetRequestedTime={handleSetRequestedTime}
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
