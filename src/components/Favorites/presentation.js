import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text } from 'components';
import { FavoriteItem } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const Favorites = React.memo(props => {
  const { favorites, Language } = props;
  console.log('favorites', favorites);
  return (
    <div className="Favorites">
      <div className="mb1">
        <Text size="cta" className="bold">
          {'Favorites'}
        </Text>
        {favorites.map((favorite, index) => (
          <FavoriteItem key={index} favorite={favorite} />
        ))}
      </div>
    </div>
  );
});

export default Favorites;
