import React from 'react';

import { Text } from 'components';

const OrderSummaryHeader = React.memo(
  ({ orderId, orderDate, orderTotal, localesContext }) => {
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
      </div>
    );
  }
);

export default OrderSummaryHeader;
