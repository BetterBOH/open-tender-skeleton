import React from 'react';
import currency from 'currency.js';
import get from 'utils/get';
import { Text, Image } from 'components';

const FavoriteItem = React.memo(({ favorite }) => {
  const price = get(favorite, 'price');
  const image = get(favorite, 'image', '');
  const menuItemName = get(favorite, 'menu_item_name', '');

  return (
    <div className="FavoriteItem mr2">
      <div className="mb1 relative pr1">
        <div className="FavoriteItem__image-container flex justify-center items-center shadow-sm radius-md overflow-hidden bg-color-gray-lighter">
          <Image
            src={image}
            className="FavoriteItem__image bg-color-gray shadow-md radius-sm"
          />
        </div>
        <Text
          className="FavoriteItem__price-container absolute px1 py_5 shadow-md radius-lg bold color-black bg-color-white"
          size="small"
        >
          {currency(price, { formatWithSymbol: true }).format()}
        </Text>
      </div>
      <Text
        size="small"
        className="nowrap overflow-hidden text-overflow-ellipsis inline-block bold color-black my_5"
      >
        {menuItemName}
      </Text>
    </div>
  );
});

export default FavoriteItem;
