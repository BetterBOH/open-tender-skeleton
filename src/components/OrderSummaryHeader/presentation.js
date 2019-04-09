import React from 'react';

import { Text } from 'components';

const OrderSummaryHeader = React.memo(({ orderId, orderDate, orderTotal }) => {
  return (
    <div className="OrderSummaryHeader text-center">
      <div className="mb1_5">
        <Text size="headline">{`Order #${orderId}`}</Text>
      </div>
      <Text size="description" className="color-gray-dark">
        {`Your order was placed on ${orderDate} for a total of $${orderTotal} after loyalty rewards were applied.`}
      </Text>
    </div>
  );
});

export default OrderSummaryHeader;
