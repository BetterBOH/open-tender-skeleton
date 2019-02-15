import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Text, QuantitySpinner } from 'components';

const LineItemRow = React.memo(props => {
  const {
    lineItem,
    handleDecrement,
    handleIncrement,
    isConfigurable,
    Language
  } = props;

  const name = get(lineItem, 'name');
  const quantity = get(lineItem, 'quantity');
  const price = get(lineItem, 'total_price');
  const calories = get(lineItem, 'calories');
  const hasQuantity = quantity && quantity > 0;

  return hasQuantity ? (
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
        <QuantitySpinner
          isDisabled={!isConfigurable}
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      )}
    </div>
  ) : null;
});

export default LineItemRow;
