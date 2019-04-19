import React from 'react';
import get from 'utils/get';

import SideCurtainVariants from 'constants/SideCurtainVariants';
import { PICKUP, ASAP } from 'constants/OpenTender';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';

import {
  Text,
  Card,
  LinkButton,
  OrderSummaryNode,
  CartButton
} from 'components';

const { MINI_CART } = SideCurtainVariants;

const Routes = getConfig(ConfigKeys.ROUTES);
const RoutesWithoutCartButton = ['auth', 'signup', 'login', 'reset'].map(
  route => get(Routes, `${route}.path`)
);

const CurrentOrderSummary = React.memo(
  ({
    orderSummaryData,
    lineItemsData,
    setSideCurtain,
    location,
    localesContext,
    brandContext
  }) => {
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

    const lineItemsQuantity = get(lineItemsData, 'length', 0);

    return (
      <div className="fixed b0 r0 mr1 md:mr3 mb1 md:col-5 lg:col-4 z1">
        {!!lineItemsQuantity ? (
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
          />
        )}
      </div>
    );
  }
);

export default CurrentOrderSummary;
