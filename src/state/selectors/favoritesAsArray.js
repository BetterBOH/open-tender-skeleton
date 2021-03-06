import { createSelector } from 'reselect';
import get from 'utils/get';

const favoriteItemsMapToArray = items => {
  return Object.keys(items).map(itemID => items[itemID]);
};

export default createSelector(
  state => get(state, 'openTender.session.favorites.favoritesById'),
  favoritesById => {
    if (!favoritesById) return [];

    return favoriteItemsMapToArray(favoritesById);
  }
);
