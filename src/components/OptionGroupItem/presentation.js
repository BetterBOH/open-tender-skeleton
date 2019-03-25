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
  );
});

const OptionGroupItem = React.memo(
  ({ item, optionGroup, handleDecrement, handleIncrement, localesContext }) => {
    const quantity = get(item, 'quantity');
    const useRadio =
      get(optionGroup, 'min_options') === 1 &&
      get(optionGroup, 'max_options') === 1;

    return (
      <div className="OptionGroupItem OptionGroupItem--with-quantity flex justify-between items-center py1">
        {useRadio ? (
          <Button>
            {/* TO-DO: Make actual radio button */}
            <OptionGroupItemInner item={item} localesContext={localesContext} />
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
