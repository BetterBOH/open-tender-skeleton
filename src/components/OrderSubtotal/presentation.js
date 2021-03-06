import React from 'react';
import currency from 'currency.js';

import { Text } from 'components';

const OrderSubtotal = React.memo(props => {
  const { subtotal, localesContext } = props;
  const { Language } = localesContext;

  if (!subtotal) return null;

  return (
    <div className="flex justify-between bg-color-white-wash p1_5">
      <Text
        size="extra-small"
        className="letter-spacing-sm text-bold color-gray-dark uppercase"
      >
        {Language.t('cart.subtotal')}
      </Text>
      <Text size="extra-small" className="color-black">
        {currency(subtotal, { formatWithSymbol: true }).format()}
      </Text>
    </div>
  );
});

export default OrderSubtotal;
