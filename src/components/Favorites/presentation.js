import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text } from 'components';
import { FavoriteItem } from 'components';
import { defaultConfig } from 'config';

const gray = get(defaultConfig, 'brand.colors.gray');

const Favorites = React.memo(props => {
  const { headerText, subtitle, favorites, localesContext } = props;
  const { Language } = localesContext;
  console.log('favorites', favorites);

  return (
    <div className="Favorites">
      <div className="mb1">
        <Text size="cta" className="bold">
          {headerText || Language.t('favorites.headerText')}
        </Text>
        <Text size="cta" className="bold">
          {subtitle || Language.t('favorites.subtitle')}
        </Text>
        <div className="flex flex-nowrap overflow-x-auto mt1_5 mb_5">
          {favorites.map((favorite, index) => (
            <FavoriteItem key={index} favorite={favorite} />
          ))}
        </div>
        <Text size="cta" className="bold">
          {favorites.length
            ? `${favorites.length} ${Language.t('favorites.saved')}`
            : null}
        </Text>
      </div>
    </div>
  );
});

export default Favorites;
