import React from 'react';
import get from 'utils/get';

import { PICKUP, ASAP } from 'constants/OpenTender';

import { Card, Text, Icon, Image } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const OrderSummary = React.memo(props => {
  const { orderSummaryData, Language } = props;

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
    `cart.summary.serviceTypes.${
      serviceType === PICKUP ? 'pickup' : 'delivery'
    }`
  );
  const serviceTypeIcon = serviceType === PICKUP ? 'Bag' : 'Car';

  const orderSummaryNode = (
    value,
    label = null,
    icon = null,
    locationImage = null
  ) => (
    <div className="OrderSummary__node flex items-center">
      {label ? (
        <Text size="description" className="color-gray letter-spacing-sm mr_5">
          {label}
        </Text>
      ) : null}
      <div className="flex items-center bg-color-gray-light radius-sm p_5">
        {icon ? (
          <div className="OrderSummary__icon mr_5">
            <Icon icon={icon} fill={gray} />
          </div>
        ) : null}
        {locationImage ? (
          <div className="OrderSummary__image mr_5">
            <Image className="w100 h100 radius-md" src={locationImage} />
          </div>
        ) : null}
        <Text size="description" className="color-gray-dark">
          {value}
        </Text>
      </div>
    </div>
  );

  return (
    <Card className="OrderSummary px1">
      <div className="OrderSummary__row flex justify-center items-center py1">
        {orderSummaryNode(serviceTypeValue, null, serviceTypeIcon)}
        {!!customerName
          ? orderSummaryNode(customerName, Language.t('cart.summary.orderFor'))
          : null}
      </div>
      <div className="OrderSummary__row flex justify-center items-center py1">
        {!!locationName
          ? orderSummaryNode(
              locationName,
              Language.t('cart.summary.from'),
              null,
              locationImage
            )
          : null}
        {!!orderTime
          ? orderSummaryNode(
              orderTimeValue,
              Language.t('cart.summary.at'),
              'Clock'
            )
          : null}
      </div>
    </Card>
  );
});

export default OrderSummary;
