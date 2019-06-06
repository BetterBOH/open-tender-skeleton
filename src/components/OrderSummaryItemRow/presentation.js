import React from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, QuantitySpinner } from 'components';
import { IMAGE_PREFIX } from 'constants/Images';

const OrderSummaryItemRow = React.memo(({ item, localesContext }) => {
  const name = get(item, 'name');
  const quantity = get(item, 'quantity');
  const price = get(item, 'total_price');
  const calories = get(item, 'nutritional_info.calories');
  const imageUrl = get(item, 'small_image');

  const presentOptionItems = item.option_groups
    .map(optionGroup =>
      optionGroup.option_items.map(optionItem => optionItem.name)
    )
    .flat(2);

  const optionItemList = presentOptionItems.join(', ');

  return (
    <div className="OrderSummaryItemRow flex justify-between items-center py1">
      <div className="flex items-center">
        <div className="OrderSummaryItemRow__image-container flex items-center justify-center radius-md overflow-hidden bg-color-gray-lighter mr1">
          <Image
            className="OrderSummaryItemRow__image"
            src={`${IMAGE_PREFIX}${imageUrl}`}
            alt={name}
          />
        </div>
        <div className="OrderSummaryItemRow__meta-data flex flex-col">
          {name && (
            <Text size="extra-small" className="text-bold color-black">
              {name}
            </Text>
          )}
          {!!optionItemList && (
            <Text size="extra-small" className="color-gray mt_25">
              {optionItemList}
            </Text>
          )}
          <div className="flex mt_25">
            <Text size="extra-small" className="text-bold color-gray-dark mr_5">
              {currency(price, {
                formatWithSymbol: true
              }).format()}
            </Text>
            {calories && (
              <Text size="extra-small" className="color-gray-dark">
                {`${calories} ${localesContext.Language.t(
                  'menu.nutritionFactUnits.cal'
                )}`}
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
