import React, { PureComponent, createRef } from 'react';
import { Constants } from 'brandibble-redux';

import { Text, Icon, Card, Button } from 'components';
import cx from 'classnames';
import DatePicker from 'react-datepicker';
import get from 'utils/get';

const { PICKUP } = Constants.ServiceTypes;

class EditServiceTypeTime extends PureComponent {
  constructor(props) {
    super(...arguments);

    const orderableTimes = get(props, 'orderableTimesFormatted', []);
    this.orderableTimeRefs = orderableTimes.map(createRef);
  }

  render() {
    const {
      className,
      orderableTimesFormatted,
      firstOrderableDay,
      lastOrderableDay,
      currentOrderRequestedDay,
      handleSetRequestedDay,
      handleSetRequestedTime,
      localesContext,
      brandContext,
      serviceType
    } = this.props;

    return (
      <Card className={cx('EditServiceTypeTime col-12 p1', className)}>
        <Text size="small" className="bold uppercase color-gray-dark pb1">
          {serviceType === PICKUP
            ? localesContext.Language.t('editServiceTypeTime.headerForPickup')
            : localesContext.Language.t(
                'editServiceTypeTime.headerForDelivery'
              )}
        </Text>
        {!!orderableTimesFormatted && !!orderableTimesFormatted.length && (
          <div className="col-12 flex flex-row">
            <div className="flex flex-col col-5">
              <DatePicker
                selected={currentOrderRequestedDay}
                minDate={firstOrderableDay}
                maxDate={lastOrderableDay}
                onChange={e => handleSetRequestedDay(e)}
              />
            </div>
            <div className="EditServiceTypeTime__times flex flex-col col-7 overflow-scroll">
              {orderableTimesFormatted.map((time, i) => (
                <Button
                  key={time.isoDate}
                  elemRef={get(this, `orderableTimeRefs[${i}]`)}
                  ariaLabel={
                    time.isSelected
                      ? `${time.format} - ${localesContext.Language.t(
                          'editServiceTypeTime.currentlySelected'
                        )}`
                      : time.format
                  }
                  className={cx(
                    'EditServiceTypeTime__row flex flex-row justify-between items-center p_25',
                    {
                      'bg-color-gray-light': time.isSelected
                    }
                  )}
                  onClick={() => handleSetRequestedTime(time)}
                >
                  <Text
                    className={cx({
                      bold: time.isSelected
                    })}
                  >
                    {time.format}
                  </Text>
                  {time.isSelected && (
                    <Icon
                      fill={get(brandContext, 'colors.white')}
                      icon="Check"
                      variant="small"
                      className="EditServiceTypeTime__icon circle bg-color-success"
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Card>
    );
  }
}

export default EditServiceTypeTime;
