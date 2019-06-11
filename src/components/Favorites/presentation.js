import React from 'react';
import { Text, Button } from 'components';
import { FavoriteItem } from 'components';

const Favorites = React.memo(({ favorites, localesContext }) => (
  <div className="Favorites">
    <div className="px1 mb_5">
      <Text size="cta" className="bold">
        {localesContext.Language.t('favorites.headerText')}
      </Text>
    </div>
    <div className="px1 mb_5">
      <Text size="description" className="color-gray-dark">
        {localesContext.Language.t('favorites.subtitle')}
      </Text>
    </div>
    {!!favorites && !!favorites.length ? (
      <div className="Favorites__items-container flex flex-nowrap overflow-x-auto overflow-y-hidden py1">
        {favorites.map(favorite => (
          <FavoriteItem key={favorite.favorite_item_id} favorite={favorite} />
        ))}
      </div>
    ) : (
      <div className="flex flex-col py1">
        <Text className="color-gray-dark mb1" size="description">
          {localesContext.Language.t('favorites.noFavorites')}
        </Text>
        <Button
          variant="primary"
          className="bg-color-gray-dark flex items-center justify-center"
          to="/"
        >
          <Text size="cta" className="color-white text-bold">
            {localesContext.Language.t('favorites.addFavorites')}
          </Text>
        </Button>
      </div>
    )}
  </div>
));

export default Favorites;
