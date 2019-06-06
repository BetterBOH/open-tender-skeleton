import React from 'react';
import { Constants } from 'brandibble-redux';

import get from 'utils/get';
import { isoToDateAndTime } from 'utils/formatTime';

import { ASAP } from 'constants/OpenTender';

import { Card, OrderSummaryDetail } from 'components';

const { PICKUP } = Constants.ServiceTypes;

const OrderSummary = React.memo(
  ({ currentOrder, currentLocation, currentCustomer, localesContext }) => {
    const customerName = get(currentCustomer, 'first_name');

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
      <Card className="OrderSummary px1">
        <div className="OrderSummary__row flex justify-center items-center py1">
          <OrderSummaryDetail value={serviceType} icon={serviceTypeIcon} />
          <OrderSummaryDetail
            value={customerName || Language.t('cart.guest')}
            label={Language.t('cart.summary.orderFor')}
            icon="UserCircle"
          />
        </div>
        <div className="OrderSummary__row flex justify-center items-center py1">
          {!!get(currentLocation, 'name') && (
            <OrderSummaryDetail
              value={currentLocation.name}
              label={Language.t('cart.summary.from')}
              imageUrl={get(currentLocation, 'small_image_url')}
            />
          )}
          <OrderSummaryDetail
            value={orderTime}
            label={Language.t('cart.summary.at')}
            icon="Clock"
          />
        </div>
      </Card>
    );
  }
);

export default OrderSummary;
