import React from 'react';

import { PICKUP, ASAP } from 'constants/OpenTender';

import { Text, Card, OrderSummaryNode, CartButton } from 'components';

const DashboardOrderSummary = React.memo(props => {
  const { orderSummaryData, lineItemsData, localesContext } = props;

  const { Language } = localesContext;

  const {
    serviceType,
    orderTime,
    locationName,
    locationImage
  } = orderSummaryData;

  const orderTimeValue =
    orderTime === ASAP ? Language.t('cart.summary.asap') : orderTime;
  const serviceTypeValue = Language.t(
    `cart.summary.serviceType.${serviceType === PICKUP ? 'pickup' : 'delivery'}`
  );
  const serviceTypeIcon = serviceType === PICKUP ? 'Bag' : 'Car';

  const cartHasItems = !!lineItemsData.length;
  const cartButton = <CartButton />;

  return cartHasItems ? (
    <Card className="DashboardOrderSummary">
      <div className="flex justify-between m1_5">
        <div className="mr1">
          <Text size="cta" className="bold">
            {Language.t('dashboard.yourOrder')}
          </Text>
          <div className="OrderSummary__row flex justify-center items-center py1">
            <OrderSummaryNode value={serviceTypeValue} icon={serviceTypeIcon} />
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
        </div>
        {cartButton}
      </div>
    </Card>
  ) : (
    <div className="absolute b0 r0 mr3 mb1 none md:block z1">{cartButton}</div>
  );
});

export default DashboardOrderSummary;
