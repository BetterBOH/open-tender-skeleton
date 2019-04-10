import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, QuantitySpinner } from 'components';

const OrderSummaryItemRow = React.memo(({ localesContext, item }) => {
  const name = get(item, 'name');
  const quantity = get(item, 'quantity');
  const price = get(item, 'price');
  const calories = get(item, 'nutritional_info.calories');
  const imageUrl = get(item, 'small_image');

  const { Language } = localesContext;

  return (
    <div className="OrderSummaryItemRow flex justify-between items-center py1">
      <div className="flex items-center">
        {imageUrl && (
          <Image
            className="OrderSummaryItemRow__image shadow-md radius-md mr1"
            src={imageUrl}
            alt={name}
          />
        )}
        <div className="OrderSummaryItemRow__meta-data">
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
      <QuantitySpinner isDisabled={true} quantity={quantity} />
    </div>
  );
});

export default OrderSummaryItemRow;
