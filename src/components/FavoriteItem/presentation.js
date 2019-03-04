import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const FavoriteItem = React.memo(props => {
  const { favorite, Language } = props;

  return (
    <div className="FavoriteItem">
      <div className="mb1">
        <div className="PastOrderCard__image bg-color-gray shadow-md radius-md" />
      </div>
      <div className="mb1">
        <Text>{`${favorite.menu_item_name}`}</Text>
      </div>
    </div>
  );
});

export default FavoriteItem;
