import { createSelector } from 'reselect';
import get from 'utils/get';

const accountItemsMapToArray = items => {
  return Object.keys(items).map(itemID => items[itemID]);
};

export default createSelector(
  state => get(state, 'openTender.session.favorites.favoritesById', {}),
  favoritesById => {
    const favoritesArray = accountItemsMapToArray(favoritesById);
    return {};
  }
);
