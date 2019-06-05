import React from 'react';
import { Constants } from 'brandibble-redux';
import get from 'utils/get';
import { isoToDateAndTime } from 'utils/formatTime';

import SideCurtainVariants from 'constants/SideCurtainVariants';
import { ASAP } from 'constants/OpenTender';
import getRoutes from 'utils/getRoutes';

import {
  Text,
  Card,
  LinkButton,
  OrderSummaryDetail,
  CartButton
} from 'components';

const { PICKUP } = Constants.ServiceTypes;
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
    lineItems,
    currentOrder,
    currentLocation,
    setSideCurtain,
    location,
    localesContext,
    brandContext
  }) => {
    /* TO-DO: Figure out how this full design actually works
     * and when it is to be used, and add functionality to buttons.
     */
    const showOrderControls = true;

    const pathname = get(location, 'pathname');

    if (RoutesWithoutCartButton.includes(pathname)) return null;

    const { Language } = localesContext;

    const orderTime =
      get(currentOrder, 'requested_at') === ASAP
        ? Language.t('dashboard.summary.asap')
        : isoToDateAndTime(get(currentOrder, 'requested_at'));

    const serviceType =
      get(currentOrder, 'service_type') === PICKUP
        ? Language.t('dashboard.summary.serviceType.pickup')
        : Language.t('dashboard.summary.serviceType.delivery');

    const serviceTypeIcon =
      get(currentOrder, 'service_type') === PICKUP ? 'Bag' : 'Car';

    const lineItemsQuantity = lineItems
      ? lineItems.reduce((totalItems, lineItem) => {
          return (totalItems += get(lineItem, 'quantity', 0));
        }, 0)
      : 0;

    return (
      <div className="CurrentOrderSummary fixed b0 r0 mr1 md:mr3 mb1 md:col-6 lg:col-5 z1">
        {showOrderControls ? (
          <Card
            className="CurrentOrderSummary__card bg-color-white shadow-sm"
            variant="orderSummary"
          >
            <div className="flex justify-between mt1_5 mx1_5 mb_5">
              <div className="CurrentOrderSummary__meta mr1">
                <Text size="cta" className="bold">
                  {Language.t('dashboard.summary.yourOrder')}
                </Text>
                <div className="flex justify-center items-center py1">
                  <OrderSummaryDetail
                    value={serviceType}
                    icon={serviceTypeIcon}
                  />
                  {!!get(currentLocation, 'name') && (
                    <OrderSummaryDetail
                      value={currentLocation.name}
                      label={Language.t('dashboard.summary.from')}
                      imageUrl={get(currentLocation, 'small_image_url')}
                    />
                  )}
                  <OrderSummaryDetail
                    value={orderTime}
                    label={Language.t('dashboard.summary.at')}
                    icon="Clock"
                  />
                </div>
              </div>
              <CartButton
                onClick={() => setSideCurtain(MINI_CART)}
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
                className="CurrentOrderSummary__LinkButton col-6 bg-color-black color-white flex-nowrap"
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
