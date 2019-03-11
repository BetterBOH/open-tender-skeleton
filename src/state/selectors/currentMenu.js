import { createSelector } from 'reselect';
import { locationIdFromMenuUrl } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => locationIdFromMenuUrl(state),
  state => get(state, 'openTender.session.order.orderData.service_type'),
  state => get(state, 'openTender.session.menus'),
  state => get(state, 'openTender.session.order.lineItemsData'),
  (locationId, serviceType, menus, lineItems) => {
    if (!menus || !Object.keys(menus).length) return null;

    const currentMenuKey = Object.keys(menus)
      .reverse()
      .find(menu => {
        const [currentLocationId, currentServiceType] = menu.split('_');

        return (
          parseInt(currentLocationId) === locationId &&
          currentServiceType === serviceType
        );
      });

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

          return {
            ...item,
            quantity,
            lineItemInCart
          };
        })
      }))
    };

    return menuWithLineItemData;
  }
);
