import React, { Fragment } from 'react';
import get from 'utils/get';
import currency from 'currency.js';

import { Image, Text, Button, QuantitySpinner } from 'components';

const OptionGroupItemInner = React.memo(({ optionItem, localesContext }) => {
  const name = get(optionItem, 'optionItemData.name');
  const price = get(optionItem, 'optionItemData.price');
  const calories = get(optionItem, 'optionItemData.nutritional_info.calories');
  const imageUrl = get(optionItem, 'optionItemData.small_image_url');

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
    optionItem,
    optionGroup,
    handleDecrement,
    handleIncrement,
    localesContext
  }) => {
    const useRadio =
      get(optionGroup, 'optionGroupData.min_options') === 1 &&
      get(optionGroup, 'optionGroupData.max_options') === 1;

    return (
      <div className="OptionGroupItem OptionGroupItem--with-quantity flex justify-between items-center py1">
        {useRadio ? (
          <Button
            className="col-12 flex items-center justify-between"
            onClick={handleIncrement}
          >
            {/* TO-DO: Make actual radio button */}
            <OptionGroupItemInner
              optionItem={optionItem}
              localesContext={localesContext}
            />
            {get(optionItem, 'quantity') ? (
              <input type="radio" checked />
            ) : (
              <input type="radio" />
            )}
          </Button>
        ) : (
          <Fragment>
            <OptionGroupItemInner
              optionItem={optionItem}
              localesContext={localesContext}
            />
            <QuantitySpinner
              quantity={get(optionItem, 'quantity')}
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
