import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text, Icon } from 'components';
import { FavoriteItem } from 'components';
import { defaultConfig } from 'config';

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
        <div className="mb1 flex">
          <Text size="description" className="capitalize color-black pr_5">
            {favorites.length
              ? `${favorites.length} ${Language.t('favorites.saved')}`
              : null}
          </Text>
          <Icon
            className="Favorites__button-icon"
            icon={'Details'}
            fill="gray"
          />
        </div>
      </div>
    </div>
  );
});

export default Favorites;
