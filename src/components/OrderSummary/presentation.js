import React from 'react';
import get from 'utils/get';

import { PICKUP, ASAP } from 'constants/OpenTender';

import { Card, Text, Icon, Image } from 'components';
import { defaultConfig } from 'config';

const OrderSummaryNode = React.memo(props => {
  const { value, label, icon, imageUrl } = props;

  return (
    <div className="OrderSummary__node flex items-center">
      {label ? (
        <Text
          size="description"
          className="color-gray-dark letter-spacing-sm mr_5"
        >
          {label}
        </Text>
      ) : null}
      <div className="flex items-center bg-color-gray-light radius-sm p_5">
        {icon ? (
          <div className="OrderSummary__icon mr_5">
            <Icon icon={icon} fill={get(defaultConfig, 'brand.colors.gray')} />
          </div>
        ) : null}
        {imageUrl ? (
          <div className="OrderSummary__image mr_5">
            <Image className="w100 h100 radius-md" src={imageUrl} />
          </div>
        ) : null}
        <Text size="description" className="color-black">
          {value}
        </Text>
      </div>
    </div>
  );
});

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
    orderTime === ASAP ? Language.t('cart.summary.asap') : orderTime;
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
          />
        ) : null}
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
