import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, QuantitySpinner } from 'components';

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
  const imageUrl = get(lineItem, 'productData.small_image_url');

  return (
    <div className="LineItemRow flex justify-between items-center py1">
      <div className="flex items-center">
        {imageUrl && (
          <Image
            className="LineItemRow__image shadow-md radius-md mr1"
            src={imageUrl}
            alt={name}
          />
        )}
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
