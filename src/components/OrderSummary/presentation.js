import React from 'react';
import { Constants } from 'brandibble-redux';

import get from 'utils/get';
import { isoToDateAndTime } from 'utils/formatTime';

import { ASAP } from 'constants/OpenTender';

import { Card, OrderSummaryNode } from 'components';

const { PICKUP } = Constants.ServiceTypes;

const OrderSummary = React.memo(props => {
  const { orderSummaryData, localesContext } = props;

  const { Language } = localesContext;

  const {
    serviceType,
    orderTime,
    locationName,
    locationImage,
    customer
  } = orderSummaryData;

  const customerName = get(customer, 'first_name');
  const orderTimeValue =
    orderTime === ASAP
      ? Language.t('cart.summary.asap')
      : isoToDateAndTime(orderTime);
  const serviceTypeValue = Language.t(
    `cart.summary.serviceType.${serviceType === PICKUP ? 'pickup' : 'delivery'}`
  );
  const serviceTypeIcon = serviceType === PICKUP ? 'Bag' : 'Car';

  return (
    <Card className="OrderSummary px1">
      <div className="OrderSummary__row flex justify-center items-center py1">
        <OrderSummaryNode value={serviceTypeValue} icon={serviceTypeIcon} />
        {!!customerName ? (
          <OrderSummaryNode
            value={customerName}
            label={Language.t('cart.summary.orderFor')}
            icon="UserCircle"
          />
        ) : (
          <OrderSummaryNode
            value={Language.t('cart.guest')}
            label={Language.t('cart.summary.orderFor')}
            icon="UserCircle"
          />
        )}
      </div>
      <div className="OrderSummary__row flex justify-center items-center py1">
        {!!locationName ? (
          <OrderSummaryNode
            value={locationName}
            label={Language.t('cart.summary.from')}
            imageUrl={locationImage}
          />
        ) : null}
        {!!orderTime ? (
          <OrderSummaryNode
            value={orderTimeValue}
            label={Language.t('cart.summary.at')}
            icon="Clock"
          />
        ) : null}
      </div>
    </Card>
  );
});

export default OrderSummary;
