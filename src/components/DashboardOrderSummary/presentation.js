import React, { Fragment } from 'react';
import get from 'utils/get';

import { PICKUP, ASAP } from 'constants/OpenTender';

import {
  Text,
  Card,
  LinkButton,
  OrderSummaryNode,
  CartButton
} from 'components';

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
    orderTime === ASAP ? Language.t('dashboard.summary.asap') : orderTime;
  const serviceTypeValue = Language.t(
    `dashboard.summary.serviceType.${serviceType}`
  );
  const serviceTypeIcon = serviceType === PICKUP ? 'Bag' : 'Car';

  const lineItemsQuantity = get(lineItemsData, 'length', 0);

  return !!lineItemsQuantity ? (
    <Card className="DashboardOrderSummary">
      <div className="flex justify-between mt1_5 mx1_5 mb_5">
        <div className="mr1">
          <Text size="cta" className="bold">
            {Language.t('dashboard.summary.yourOrder')}
          </Text>
          <div className="OrderSummary__row flex justify-center items-center py1">
            <OrderSummaryNode value={serviceTypeValue} icon={serviceTypeIcon} />
            {!!locationName && (
              <OrderSummaryNode
                value={locationName}
                label={Language.t('dashboard.summary.from')}
                imageUrl={locationImage}
              />
            )}
            {!!orderTime && (
              <OrderSummaryNode
                value={orderTimeValue}
                label={Language.t('dashboard.summary.at')}
                icon="Clock"
              />
            )}
          </div>
        </div>
        <CartButton quantity={lineItemsQuantity} />
      </div>
      <div className="DashboardOrderSummary__tray flex p1">
        <LinkButton
          variant="dashboard-desktop"
          className="col-6 bg-color-white shadow-md mr_5"
          iconLeft="Repeat"
          iconLeftFill="black"
          iconRight={null}
        >
          <Text size="cta" className="text-semibold color-black">
            {Language.t('dashboard.summary.startNewOrder')}
          </Text>
        </LinkButton>
        <LinkButton
          variant="dashboard-desktop"
          className="col-6 bg-color-black"
          iconRight="Details"
          iconRightFill="white"
        >
          <Text size="cta" className="text-semibold color-white">
            {Language.t('dashboard.summary.resumeOrder')}
          </Text>
        </LinkButton>
      </div>
    </Card>
  ) : (
    <CartButton className="right" />
  );
});

export default DashboardOrderSummary;
