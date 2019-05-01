import React from 'react';
import currency from 'currency.js';

import { Text } from 'components';

const OrderTotals = React.memo(({ data }) => {
  return (
    <div className="OrderTotals md:mx2 bg-color-white-overlay px1_5 pb1_5 pt2">
      {data.map(({ label, price }) => {
        return (
          <div className="OrderTotals__row flex justify-between" key={label}>
            <Text
              size="extrasmall"
              className="letter-spacing-sm text-bold color-gray-dark uppercase"
            >
              {label}
            </Text>
            <Text size="extrasmall" className="color-black">
              {currency(price, { formatWithSymbol: true }).format()}
            </Text>
          </div>
        );
      })}
    </div>
  );
});

export default OrderTotals;
