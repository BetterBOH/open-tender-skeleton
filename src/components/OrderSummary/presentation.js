import React from 'react';
import get from 'utils/get';

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

  const orderSummaryNode = (
    label = null,
    icon = null,
    locationImage = null,
    value
  ) => (
    <div className="flex items-center">
      {label ? (
        <Text
          size="extrasmall"
          className="text-bold color-gray letter-spacing-sm"
        >
          {label}
        </Text>
      ) : null}
      <div className="flex bg-color-gray-light radius-sm p_5">
        {icon ? (
          <div className="OrderSummary__icon mr_5">
            <Icon icon={icon} fill={gray} />
          </div>
        ) : null}
        {locationImage ? (
          <div className="OrderSummary__icon mr_5">
            <Image className="w100 h100 radius-md" src={locationImage} />
          </div>
        ) : null}
        <Text size="extrasmall" className="color-gray-dark">
          {value}
        </Text>
      </div>
    </div>
  );

  return (
    <Card className="OrderSummary px1_5 py_5">
      <div className="OrderSummary__row flex justify-between items-center py1 pl1 pr_5">
        {!!serviceType
          ? orderSummaryNode(null, 'Bag', null, serviceType)
          : null}
        {!!customerName
          ? orderSummaryNode(
              Language.t('cart.summary.orderFor'),
              null,
              null,
              customerName
            )
          : null}
      </div>
      <div className="OrderSummary__row flex justify-between items-center py1 pl1 pr_5">
        {!!locationName
          ? orderSummaryNode(
              Language.t('cart.summary.from'),
              null,
              locationImage,
              locationName
            )
          : null}
        {!!orderTime
          ? orderSummaryNode(Language.t('cart.summary.at'), 'Clock', orderTime)
          : null}
      </div>
    </Card>
  );
});

export default OrderSummary;
