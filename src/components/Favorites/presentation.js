import React from 'react';
import { Text, Icon, Button, Card } from 'components';
import { FavoriteItem } from 'components';
import singularOrPlural from 'utils/singularOrPlural';

const Favorites = React.memo(({ favorites, localesContext }) => (
  <div className="Favorites">
    <div className="px1">
      <div className="mb_5">
        <Text size="cta" className="bold">
          {localesContext.Language.t('favorites.headerText')}
        </Text>
      </div>
      <div className="mb1_5">
        <Text size="description" className="color-gray-dark">
          {localesContext.Language.t('favorites.subtitle')}
        </Text>
      </div>
      {!!favorites.length && (
        <div className="Favorites__items-container flex flex-nowrap overflow-x-auto overflow-y-hidden border-bottom mt1_5 mb1">
          {favorites.map(favorite => (
            <FavoriteItem key={favorite.favorite_item_id} favorite={favorite} />
          ))}
        </div>
      )}
    </div>
    {!!favorites && !!favorites.length ? (
      <div className="mb1 flex">
        <Text size="description" className="capitalize color-black pr_5">
          {`${favorites.length} ${singularOrPlural(
            favorites.length,
            localesContext.Language.t('favorites.favoriteSaved'),
            localesContext.Language.t('favorites.favoritesSaved')
          )}`}
        </Text>
        <Button alt="view-favorites" onClick={f => f}>
          <Icon className="Favorites__button-icon" icon="Details" />
        </Button>
      </div>
    ) : (
      <Card className="p1">
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
      </Card>
    )}
  </div>
));

export default Favorites;
