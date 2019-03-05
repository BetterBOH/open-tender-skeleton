import React from 'react';
import currency from 'currency.js';

import { Text } from 'components';

const FavoriteItem = React.memo(props => {
  const { favorite } = props;
  if (!favorite.price && favorite.price <= 0) return null;
  return (
    <div className="FavoriteItem mb1">
      <div className="mb1">
        <img
          src={favorite.image}
          className="FavoriteItem__image bg-color-gray shadow-md radius-sm"
        />
        <div className="flex justify-end">
          <Text
            className="FavoriteItem__price-container px1 py_5 shadow-md radius-lg bold color-black"
            size="small"
          >
            {currency(favorite.price, { formatWithSymbol: true }).format()}
          </Text>
        </div>
      </div>
      <Text size="small">
        <span className="w100 h100 nowrap overflow-hidden text-overflow-ellipsis inline-block bold color-black">
          {`${favorite.menu_item_name}`}
        </span>
      </Text>
    </div>
  );
});

export default FavoriteItem;
