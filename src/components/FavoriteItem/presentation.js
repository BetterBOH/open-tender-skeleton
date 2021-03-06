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
    handleClickIncrement,
    handleClickDecrement,
    localesContext
  }) => {
    const price = get(item, 'price');
    const menuItemName = get(favorite, 'menu_item_name', '');
    const menuItemDetails = get(favorite, 'menu_item_json[0]');
    const imageUrl = get(menuItemDetails, 'small_image');
    const calories = get(menuItemDetails, 'nutritional_info.calories');

    return (
      <div className="FavoriteItem flex flex-col justify-between mr1">
        <div className="FavoriteItem__meta">
          <div className="FavoriteItem__image-container flex justify-center items-center shadow-sm radius-md overflow-hidden bg-color-gray-lighter mb1 pr1">
            <Image
              src={`${IMAGE_PREFIX}${imageUrl}`}
              className="FavoriteItem__image bg-color-gray shadow-md radius-sm"
            />
          </div>
          <div className="FavoriteItem__details py_5 overflow-hidden text-overflow-ellipsis">
            <Text
              size="small"
              className="nowrap inline-block text-bold color-black"
            >
              {menuItemName}
            </Text>
            {(!!price || !!calories) && (
              <Text
                size="small"
                className="nowrap block color-gray text-semibold capitalize"
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
        </div>
        <div className="FavoriteItem__add-to-cart-button">
          {!!get(item, 'option_groups.length', 0) ? (
            <Button
              variant="secondary"
              className="bg-color-gray-dark hover-bg-color-black flex px1"
              onClick={handleClickIncrement}
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
              handleIncrement={handleClickIncrement}
              handleDecrement={handleClickDecrement}
            />
          )}
        </div>
      </div>
    );
  }
);

export default FavoriteItem;
