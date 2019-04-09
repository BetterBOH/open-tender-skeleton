import React from 'react';

import { Text } from 'components';

const OrderSummaryHeader = React.memo(({ orderId, orderDate, orderTotal }) => {
  return (
    <div className="OrderSummaryHeader text-center">
      <div className="">
        <Text size="headline" className="block mb1_5">
          {`Order #${orderId}`}
        </Text>
        <Text size="description" className="color-gray-dark block">
          {`Your order was placed on ${orderDate} for a total of $${orderTotal} after loyalty rewards were applied.`}
        </Text>
      </div>
    </div>
  );
});

export default OrderSummaryHeader;
