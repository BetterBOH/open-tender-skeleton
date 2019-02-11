import React from 'react';
import currency from 'currency.js';

import { Text } from 'components';

const OrderTotals = React.memo(props => {
  const { data, Language } = props;

  return (
    <div className="col-12 md:col-5 lg:col-4">
      {Object.keys(data).map(key => {
        return (
          <div className="flex justify-between" key={key}>
            <Text size="extrasmall">
              {!!Language.t(`cart.${key}`) ? Language.t(`cart.${key}`) : key}
            </Text>
            <Text size="extrasmall">
              {currency(data[key], { formatWithSymbol: true }).format()}
            </Text>
          </div>
        );
      })}
    </div>
  );
});

export default OrderTotals;
