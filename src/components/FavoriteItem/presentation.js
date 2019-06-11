import React from 'react';
import currency from 'currency.js';
import get from 'utils/get';
import { Text, Image } from 'components';
import { IMAGE_PREFIX } from 'constants/Images';

const FavoriteItem = React.memo(({ favorite, localesContext }) => {
  // TO-DO: find price in current menu
  const price = get(favorite, 'price');
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
        {!!calories && (
          <Text
            size="small"
            className="nowrap inline-block color-gray text-semibold capitalize"
          >
            {parseFloat(calories).toFixed()}{' '}
            {localesContext.Language.t('favorites.nutritionFactUnits.cal')}
          </Text>
        )}
      </div>
    </div>
  );
});

export default FavoriteItem;
