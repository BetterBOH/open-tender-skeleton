import React, { Fragment } from 'react';
import get from 'utils/get';
import currency from 'currency.js';
import { Constants } from 'brandibble-redux';
import { Image, Text, RadioSelectButton, QuantitySpinner } from 'components';

const OptionGroupItemInner = React.memo(({ optionItem, localesContext }) => {
  const name = get(optionItem, 'optionItemData.name');
  const price = get(optionItem, 'optionItemData.price');
  const calories = get(optionItem, 'optionItemData.nutritional_info.calories');
  const imageUrl = get(optionItem, 'optionItemData.small_image_url');

  const { Language } = localesContext;

  return (
    <div className="flex items-center">
      <div className="OptionGroupItem__image-container flex items-center justify-center radius-md overflow-hidden bg-color-gray-lighter mr1">
        {imageUrl && (
          <Image className="OptionGroupItem__image" src={imageUrl} alt={name} />
        )}
      </div>
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
              {`${calories} ${Language.t('menu.nutritionFactUnits.cal')}`}
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
      <div className="OptionGroupItem OptionGroupItem--with-quantity flex justify-between items-center my1">
        {useRadio ? (
          <RadioSelectButton
            className="px1"
            id={get(optionItem, 'optionItemData.id')}
            name={get(optionItem, 'optionItemData.name')}
            onClick={handleIncrement}
            isSelected={
              get(optionItem, 'presence') ===
              Constants.OptionItemsStatus.PRESENT
            }
          >
            <OptionGroupItemInner
              optionItem={optionItem}
              localesContext={localesContext}
            />
          </RadioSelectButton>
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
