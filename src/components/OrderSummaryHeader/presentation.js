import React from 'react';

import { Text, Anchor } from 'components';

const OrderSummaryHeader = React.memo(
  ({ orderId, orderDate, orderTotal, deliveryTrackingUrl, localesContext }) => {
    const { Language } = localesContext;

    return (
      <div className="OrderSummaryHeader text-center">
        <div className="mb1_5">
          <Text size="headline">
            {Language.t('orderSummary.title', { orderId })}
          </Text>
        </div>
        <Text size="description" className="color-gray-dark">
          {Language.t('orderSummary.subtitle', { orderDate, orderTotal })}
        </Text>
        {!!deliveryTrackingUrl && (
          <span>
            <Text size="description" className="color-gray-dark">
              {Language.t('orderSummary.trackDeliveryFirstPart')}
            </Text>
            <Anchor url={deliveryTrackingUrl}>
              <Text size="description" className="color-gray-dark">
                {Language.t('orderSummary.trackDeliverySecondPart')}
              </Text>
            </Anchor>
            <Text size="description" className="color-gray-dark">
              {Language.t('orderSummary.trackDeliveryThirdPart')}
            </Text>
          </span>
        )}
      </div>
    );
  }
);

export default OrderSummaryHeader;
