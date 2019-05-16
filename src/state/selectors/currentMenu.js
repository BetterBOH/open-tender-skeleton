import { createSelector } from 'reselect';
import get from 'utils/get';

const getFavoritesByMenuItemID = rawFavorites => {
  return Object.keys(rawFavorites).reduce(
    (favoritesByMenuItemID, favoriteID) => {
      const favorite = rawFavorites[favoriteID];
      favoritesByMenuItemID[favorite.menu_item_id] = favorite;

      return favoritesByMenuItemID;
    },
    {}
  );
};

export default createSelector(
  state => get(state, 'openTender.session.order.orderData.location_id'),
  state => get(state, 'openTender.session.order.orderData.service_type'),
  state => get(state, 'openTender.session.menus'),
  state => get(state, 'openTender.session.order.lineItemsData'),
  state => get(state, 'openTender.session.favorites.favoritesById'),
  (locationId, serviceType, menus, lineItems, favoritesById) => {
    if (!menus || !Object.keys(menus).length) return null;

    const favoritesByMenuItemId = getFavoritesByMenuItemID(favoritesById);

    const currentMenuKey = Object.keys(menus)
      .reverse()
      .find(menu => {
        const [currentLocationId, currentServiceType] = menu.split('_');

        return (
          parseInt(currentLocationId) === locationId &&
          currentServiceType === serviceType
        );
      });

    return menus[currentMenuKey];

    // This returns a new menu object if line items exist.
    // It will return the same menus object with the same menu parts.
    // It will map against lineItemsData and add any active quantities to the item.

    const menuWithLineItemData = {
      ...menus[currentMenuKey],
      menu: menus[currentMenuKey].menu.map(menuCategory => ({
        ...menuCategory,
        items: menuCategory.items.map(item => {
          const lineItemInCart = lineItems.find(
            lineItem => lineItem.productData.id === item.id
          );
          const quantity = lineItemInCart ? lineItemInCart.quantity : 0;
          const menuItem = favoritesByMenuItemId[item.id];
          const itemIsFavorited = !!menuItem;
          const favoriteId = itemIsFavorited ? menuItem.favorite_item_id : null;

          return {
            ...item,
            quantity,
            itemIsFavorited,
            favoriteId,
            lineItemInCart
          };
        })
      }))
    };

    return menuWithLineItemData;
  }
);
