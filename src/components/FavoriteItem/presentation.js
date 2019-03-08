import React from 'react';
import currency from 'currency.js';

import { Text, Image } from 'components';

const FavoriteItem = React.memo(props => {
  const { favorite } = props;

  if (!favorite.price && favorite.price <= 0) return null;

  return (
    <div className="FavoriteItem mb1 mr2">
      <div className="mb1 relative pr1">
        <Image
          src={favorite.image}
          className="FavoriteItem__image bg-color-gray shadow-md radius-sm"
        />
        <Text
          className="FavoriteItem__price-container absolute px1 py_5 shadow-md radius-lg bold color-black bg-color-white"
          size="small"
        >
          {currency(favorite.price, { formatWithSymbol: true }).format()}
        </Text>
      </div>
      <Text
        size="small"
        className="w100 h100 nowrap overflow-hidden text-overflow-ellipsis inline-block bold color-black"
      >
        {`${favorite.menu_item_name}`}
      </Text>
    </div>
  );
});

export default FavoriteItem;
