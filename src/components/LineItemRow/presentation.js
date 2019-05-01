import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, QuantitySpinner } from 'components';

const LineItemRow = React.memo(props => {
  const { item, isConfigurable, localesContext } = props;

  const name = get(item, 'productData.name');
  const quantity = get(item, 'quantity');
  const price = get(item, 'productData.price');
  const calories = get(item, 'productData.nutritional_info.calories');
  const imageUrl = get(item, 'productData.small_image_url');

  const { Language } = localesContext;

  const handleIncrement = () => {
    props.updateQuantity(item.quantity, item.quantity + 1);
  };

  const handleDecrement = () => {
    props.updateQuantity(item.quantity, item.quantity - 1);
  };

  return (
    <div className="LineItemRow flex justify-between items-center py1">
      <div className="flex items-center">
        <div className="LineItemRow__image-container flex items-center justify-center radius-md overflow-hidden bg-color-gray-light mr1">
          <Image className="LineItemRow__image" src={imageUrl} alt={name} />
        </div>
        <div className="LineItemRow__meta-data">
          {name && (
            <Text size="extrasmall" className="text-bold color-black">
              {name}
            </Text>
          )}
          <div>
            {price && (
              <Text
                size="extrasmall"
                className="text-bold color-gray-dark mr_5"
              >
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
        quantity={item.quantity}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
});

export default LineItemRow;
