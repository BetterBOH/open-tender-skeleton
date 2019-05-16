import React from 'react';
import get from 'utils/get';

import SideCurtainVariants from 'constants/SideCurtainVariants';
import { PICKUP, ASAP } from 'constants/OpenTender';
import getRoutes from 'utils/getRoutes';

import {
  Text,
  Card,
  LinkButton,
  OrderSummaryNode,
  CartButton
} from 'components';

const { MINI_CART } = SideCurtainVariants;

const RoutesWithoutCartButton = [
  getRoutes().LOGIN,
  getRoutes().SIGNUP,
  getRoutes().RESET,
  getRoutes().AUTH,
  getRoutes().CHECKOUT
];

const CurrentOrderSummary = React.memo(
  ({
    orderSummaryData,
    lineItems,
    setSideCurtain,
    location,
    localesContext,
    brandContext
  }) => {
    /* TO-DO: Figure out how this full design actually works
     * and when it is to be used.
     */
    const showOrderControls = false;

    const pathname = get(location, 'pathname');

    if (RoutesWithoutCartButton.includes(pathname)) return null;

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

    const lineItemsQuantity = lineItems
      ? lineItems.reduce((totalItems, lineItem) => {
          return (totalItems += get(lineItem, 'quantity', 0));
        }, 0)
      : 0;

    return (
      <div className="fixed b0 r0 mr1 md:mr3 mb1 md:col-5 lg:col-4 z1">
        {showOrderControls ? (
          <Card className="CurrentOrderSummary">
            <div className="flex justify-between mt1_5 mx1_5 mb_5">
              <div className="mr1">
                <Text size="cta" className="bold">
                  {Language.t('dashboard.summary.yourOrder')}
                </Text>
                <div className="OrderSummary__row flex justify-center items-center py1">
                  <OrderSummaryNode
                    value={serviceTypeValue}
                    icon={serviceTypeIcon}
                  />
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
              <CartButton
                onClick={setSideCurtain}
                quantity={lineItemsQuantity}
              />
            </div>
            <div className="CurrentOrderSummary__tray flex p1">
              <LinkButton
                className="CurrentOrderSummary__LinkButton col-6 bg-color-white shadow-md flex-nowrap mr_5"
                iconLeft="Repeat"
                iconLeftFill={get(brandContext, 'colors.black')}
                iconRight={null}
              >
                <Text size="cta" className="text-semibold color-black">
                  {Language.t('dashboard.summary.startNewOrder')}
                </Text>
              </LinkButton>
              <LinkButton
                className="CurrentOrderSummary__LinkButton col-6 bg-color-black flex-nowrap"
                iconRight="Details"
                iconRightFill={get(brandContext, 'colors.white')}
              >
                <Text size="cta" className="text-semibold color-white">
                  {Language.t('dashboard.summary.resumeOrder')}
                </Text>
              </LinkButton>
            </div>
          </Card>
        ) : (
          <CartButton
            onClick={() => setSideCurtain(MINI_CART)}
            className="right"
            quantity={lineItemsQuantity}
          />
        )}
      </div>
    );
  }
);

export default CurrentOrderSummary;
