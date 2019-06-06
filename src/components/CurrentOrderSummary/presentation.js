import React from 'react';
import { Constants } from 'brandibble-redux';
import get from 'utils/get';
import { isoToDateAndTime } from 'utils/formatTime';

import SideCurtainVariants from 'constants/SideCurtainVariants';
import { ASAP } from 'constants/OpenTender';

import {
  Text,
  Card,
  LinkButton,
  OrderSummaryDetail,
  CartButton
} from 'components';

const { PICKUP } = Constants.ServiceTypes;
const { MINI_CART } = SideCurtainVariants;

const CurrentOrderSummary = React.memo(
  ({
    lineItems,
    currentOrder,
    currentLocation,
    setSideCurtain,
    localesContext,
    brandContext
  }) => {
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

    return (
      <Card
        className="CurrentOrderSummary bg-color-white shadow-sm"
        variant="orderSummary"
      >
        <div className="flex justify-between mt1_5 mx1_5 mb_5">
          <div className="CurrentOrderSummary__meta mr1">
            <Text size="cta" className="bold">
              {Language.t('dashboard.summary.yourOrder')}
            </Text>
            <div className="flex justify-center items-center py1">
              <OrderSummaryDetail value={serviceType} icon={serviceTypeIcon} />
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
            currentLineItems={lineItems}
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
    );
  }
);

export default CurrentOrderSummary;
