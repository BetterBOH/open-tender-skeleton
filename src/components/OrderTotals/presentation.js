import React from 'react';
import currency from 'currency.js';

import { Text } from 'components';

const OrderTotals = React.memo(props => {
  const { data, Language } = props;

  return (
    <div className="OrderTotals flex flex-col md:col-6 lg:col-3 bg-color-white-overlay p1_5">
      {Object.keys(data).map(key => {
        return (
          <div className="OrderTotals__row flex justify-between" key={key}>
            <Text size="extrasmall" className="text-bold color-gray">
              {!!Language.t(`cart.${key}`) ? Language.t(`cart.${key}`) : key}
            </Text>
            <Text size="extrasmall" className="color-gray-dark">
              {currency(data[key], { formatWithSymbol: true }).format()}
            </Text>
          </div>
        );
      })}
    </div>
  );
});

export default OrderTotals;
