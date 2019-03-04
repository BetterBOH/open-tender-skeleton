import React from 'react';
import currency from 'currency.js';

import { Text } from 'components';

const OrderSubtotal = React.memo(props => {
  const { subtotal, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="flex justify-between bg-color-white-overlay p1_5">
      <Text
        size="extrasmall"
        className="letter-spacing-sm text-bold color-gray-dark"
      >
        {Language.t('cart.subtotal')}
      </Text>
      <Text size="extrasmall" className="color-black">
        {currency(subtotal, { formatWithSymbol: true }).format()}
      </Text>
    </div>
  );
});

export default OrderSubtotal;
