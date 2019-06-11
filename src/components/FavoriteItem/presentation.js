import React from 'react';
import currency from 'currency.js';
import get from 'utils/get';
import { Text, Image, Button, QuantitySpinner } from 'components';
import { IMAGE_PREFIX } from 'constants/Images';

const FavoriteItem = React.memo(
  ({
    favorite,
    item,
    quantity,
    updateQuantity,
    handleClickAddToCart,
    localesContext
  }) => {
    const price = get(item, 'price');
    const menuItemName = get(favorite, 'menu_item_name', '');
    const menuItemDetails = get(favorite, 'menu_item_json[0]');
    const imageUrl = get(menuItemDetails, 'small_image');
    const calories = get(menuItemDetails, 'nutritional_info.calories');

    return (
      <div className="FavoriteItem mr1">
        <div className="mb1 relative pr1">
          <div className="FavoriteItem__image-container flex justify-center items-center shadow-sm radius-md overflow-hidden bg-color-gray-lighter">
            <Image
              src={`${IMAGE_PREFIX}${imageUrl}`}
              className="FavoriteItem__image bg-color-gray shadow-md radius-sm"
            />
          </div>
        </div>
        <div className="py_5 overflow-hidden text-overflow-ellipsis">
          <Text
            size="small"
            className="nowrap inline-block text-bold color-black"
          >
            {menuItemName}
          </Text>
          {(!!price || !!calories) && (
            <Text
              size="small"
              className="nowrap inline-block color-gray text-semibold capitalize"
            >
              {!!price &&
                currency(price, {
                  formatWithSymbol: true
                }).format()}{' '}
              {!!calories && (
                <span>
                  {parseFloat(calories).toFixed()}{' '}
                  {localesContext.Language.t(
                    'favorites.nutritionFactUnits.cal'
                  )}
                </span>
              )}
            </Text>
          )}
        </div>
        {!!get(item, 'option_groups.length', 0) ? (
          <Button
            variant="secondary"
            className="bg-color-gray-dark hover-bg-color-black flex px1"
            onClick={handleClickAddToCart}
          >
            <Text
              size="extra-small"
              className="color-white uppercase text-bold letter-spacing-sm"
            >
              {localesContext.Language.t('menu.add')}
            </Text>
          </Button>
        ) : (
          <QuantitySpinner
            quantity={quantity}
            handleIncrement={newQuantity =>
              updateQuantity(quantity, newQuantity)
            }
            handleDecrement={newQuantity =>
              updateQuantity(quantity, newQuantity)
            }
          />
        )}
      </div>
    );
  }
);

export default FavoriteItem;
