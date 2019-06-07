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
        <Text size="description" className="color-gray-dark mr_25">
          {Language.t('orderSummary.subtitle', { orderDate, orderTotal })}
        </Text>
        {!!deliveryTrackingUrl && (
          <Anchor
            className="underline color-gray-dark"
            url={deliveryTrackingUrl}
          >
            <Text size="description">
              {Language.t('orderSummary.trackDeliveryLink')}
            </Text>
          </Anchor>
        )}
      </div>
    );
  }
);

export default OrderSummaryHeader;
