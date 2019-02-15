import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Text } from 'components';

const LineItemRow = React.memo(props => {
  const { lineItem, Language } = props;

  const name = get(lineItem, 'name');
  const quantity = get(lineItem, 'quantity');
  const price = get(lineItem, 'total_price');
  const calories = get(lineItem, 'calories');

  return (
    <div className="CartLineItems__row flex justify-between items-center py1 pl1 pr_5">
      <div className="CartLineItems__meta-data">
        {name && (
          <Text size="extrasmall" className="text-bold color-black">
            {get(lineItem, 'name')}
          </Text>
        )}
        <div>
          {price && (
            <Text size="extrasmall" className="text-bold color-gray mr_5">
              {currency(price, {
                formatWithSymbol: true
              }).format()}
            </Text>
          )}
          {calories && (
            <Text size="extrasmall" className="color-gray">
              {`${calories} ${Language.t('cart.cal')}`}
            </Text>
          )}
        </div>
      </div>
      {quantity && (
        <Text size="extrasmall" className="text-bold color-gray">
          {quantity}
        </Text>
      )}
    </div>
  );
});

export default LineItemRow;
