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

  const name = get(lineItem, 'productData.name');
  const quantity = get(lineItem, 'quantity');
  const price = get(lineItem, 'productData.price');
  const calories = get(lineItem, 'productData.nutritional_info.calories');

  // TODO: Replace image with item data from menu after creating selector

  return (
    <div className="LineItemRow flex justify-between items-center py1">
      <div className="flex items-center">
        <div className="LineItemRow__image bg-color-gray-light shadow-md radius-md mr1" />
        <div className="LineItemRow__meta-data">
          {name && (
            <Text size="extrasmall" className="text-bold color-black">
              {name}
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
                {`${calories} ${Language.t('menu.cal')}`}
              </Text>
            )}
          </div>
        </div>
      </div>
      <QuantitySpinner
        isDisabled={!isConfigurable}
        quantity={quantity}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
});

export default LineItemRow;
