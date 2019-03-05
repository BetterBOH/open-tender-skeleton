import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text, Icon } from 'components';
import { FavoriteItem } from 'components';
import { defaultConfig } from 'config';
import singularOrPlural from 'utils/singularOrPlural';

const gray = get(defaultConfig, 'brand.colors.gray');

const Favorites = React.memo(props => {
  const { headerText, subtitle, favorites, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="Favorites">
      <div className="mb1">
        <div className="mb1">
          <Text size="cta" className="bold">
            {headerText || Language.t('favorites.headerText')}
          </Text>
        </div>
        <div className="mb1">
          <Text className="color-gray-dark">
            {subtitle || Language.t('favorites.subtitle')}
          </Text>
        </div>
        <div className="Favorites__itemsContainer flex flex-nowrap overflow-x-auto mt1_5 mb1">
          {favorites.map((favorite, index) => (
            <FavoriteItem key={index} favorite={favorite} />
          ))}
        </div>
        {favorites.length ? (
          <div className="mb1 flex">
            <Text size="description" className="capitalize color-black pr_5">
              {`${favorites.length} ${singularOrPlural(
                favorites.length,
                Language.t('favorites.favoriteSaved'),
                Language.t('favorites.favoritesSaved')
              )}`}
            </Text>
            <Icon
              className="Favorites__button-icon"
              icon={'Details'}
              fill="gray"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default Favorites;
