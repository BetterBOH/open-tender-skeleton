import React, { Fragment } from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, Button, QuantitySpinner } from 'components';

const OptionGroupItemInner = React.memo(({ item, localesContext }) => {
  const name = get(item, 'name');
  const price = get(item, 'price');
  const calories = get(item, 'nutritional_info.calories');
  const imageUrl = get(item, 'small_image_url');

  const { Language } = localesContext;

  return (
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
          <Text size="small" className="text-bold color-black">
            {name}
          </Text>
        )}
        <div>
          {price && (
            <Text size="small" className="text-bold color-gray mr_5">
              {currency(price, {
                formatWithSymbol: true
              }).format()}
            </Text>
          )}
          {calories && (
            <Text size="small" className="color-gray">
              {`${calories} ${Language.t('menu.cal')}`}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
});

const OptionGroupItem = React.memo(
  ({
    item,
    optionGroup,
    lineItem,
    handleDecrement,
    handleIncrement,
    localesContext
  }) => {
    const optionItemId = get(item, 'id');
    const optionGroupId = get(optionGroup, 'id');
    const useRadio =
      get(optionGroup, 'min_options') === 1 &&
      get(optionGroup, 'max_options') === 1;

    const itemIsIncluded = get(optionGroup, 'included_items');

    const currentOptionGroupMapping = get(
      lineItem,
      'optionGroupMappings',
      []
    ).find(optionGroupMapping => optionGroupMapping.id === optionGroupId);
    const currentOptionGroupOptionItem = get(
      currentOptionGroupMapping,
      'optionItems',
      []
    ).find(option => option.optionId === optionItemId);
    const quantity = get(currentOptionGroupOptionItem, 'quantity', 0);

    return (
      <div className="OptionGroupItem OptionGroupItem--with-quantity flex justify-between items-center py1">
        {useRadio ? (
          <Button
            className="col-12 flex items-center justify-between"
            onClick={handleIncrement}
          >
            {/* TO-DO: Make actual radio button */}
            <OptionGroupItemInner item={item} localesContext={localesContext} />
            {quantity ? <input type="radio" checked /> : <input type="radio" />}
          </Button>
        ) : (
          <Fragment>
            <OptionGroupItemInner item={item} localesContext={localesContext} />
            <QuantitySpinner
              quantity={quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          </Fragment>
        )}
      </div>
    );
  }
);

export default OptionGroupItem;
