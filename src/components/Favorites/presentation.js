import React, { Fragment } from 'react';
import get from 'utils/get';

import { Text, Icon, Button } from 'components';
import { FavoriteItem } from 'components';
import singularOrPlural from 'utils/singularOrPlural';

const Favorites = React.memo(props => {
  const { favorites, localesContext } = props;
  const { Language } = localesContext;

  return (
    <div className="Favorites">
      <div className="mb1">
        <div className="mb1">
          <Text size="cta" className="bold">
            {Language.t('favorites.headerText')}
          </Text>
        </div>
        <div className="mb1">
          <Text className="color-gray-dark">
            {Language.t('favorites.subtitle')}
          </Text>
        </div>
        <div className="Favorites__items-container flex flex-nowrap overflow-x-auto overflow-y-hidden mt1_5 mb1">
          {favorites.map(favorite => (
            <FavoriteItem key={favorite.favorite_item_id} favorite={favorite} />
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
            <Button alt="view-favorites" onClick={f => f}>
              <Icon
                className="Favorites__button-icon"
                icon={'Details'}
                fill="gray"
              />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default Favorites;
