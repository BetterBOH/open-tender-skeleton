import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, QuantitySpinner } from 'components';

const OptionGroupItem = React.memo(
  ({ item, handleDecrement, handleIncrement, localesContext }) => {
    const name = get(item, 'name');
    const price = get(item, 'price');
    const quantity = get(item, 'quantity');
    const calories = get(item, 'nutritional_info.calories');
    const imageUrl = get(item, 'small_image_url');

    const { Language } = localesContext;

    return (
      <div className="OptionGroupItem flex justify-between items-center py1">
        <div className="flex items-center">
          {imageUrl && (
            <Image
              className="OptionGroupItem__image shadow-md radius-md mr1"
              src={imageUrl}
              alt={name}
            />
          )}
          <div className="OptionGroupItem__meta-data">
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
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </div>
    );
  }
);

export default OptionGroupItem;
