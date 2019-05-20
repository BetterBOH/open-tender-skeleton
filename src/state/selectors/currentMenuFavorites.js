import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

import { currentMenu } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => currentMenu(state),
  state => get(state, 'openTender.session.favorites.favoritesById'),
  (currentMenu, favoritesById) => {
    const menuCategories = get(currentMenu, 'menu', []);

    if (
      !currentMenu ||
      !menuCategories.length ||
      !favoritesById ||
      isEmpty(favoritesById)
    ) {
      return null;
    }

    const favoritesByMenuItemId = Object.keys(favoritesById).reduce(
      (favoritesByMenuItemID, favoriteId) => {
        const favorite = favoritesById[favoriteId];
        favoritesByMenuItemID[favorite.menu_item_id] = favorite;

        return favoritesByMenuItemID;
      },
      {}
    );

    return menuCategories.reduce((menuCategoryFavorites, menuCategory) => {
      const currentMenuCategoryFavorites = menuCategory.items.reduce(
        (favorites, menuItem) => {
          const menuItemId = get(menuItem, 'id');
          const favoritedItem = favoritesByMenuItemId[menuItemId];

          if (favoritedItem) favorites.push(menuItemId);

          return favorites;
        },
        []
      );

      if (!isEmpty(currentMenuCategoryFavorites)) {
        menuCategoryFavorites[menuCategory.id] = currentMenuCategoryFavorites;
      }

      return menuCategoryFavorites;
    }, {});
  }
);
