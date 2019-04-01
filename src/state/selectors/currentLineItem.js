import { createSelector } from 'reselect';
import { lineItemUuidFromUrl, currentMenu } from 'state/selectors';

import get from 'utils/get';

export default createSelector(
  state => lineItemUuidFromUrl(state),
  state => currentMenu(state),
  state => get(state, 'openTender.session.order.lineItemsData'),
  (uuid, currentMenu, lineItems) => {
    const lineItem = lineItems.find(lineItem => lineItem.uuid === uuid);
    if (!lineItem) return null;

    const menuItemId = get(lineItem, 'productData.id');
    const menuItemCategoryName = get(lineItem, 'productData.category_name');
    const menuCategory = get(currentMenu, 'menu', []).find(
      menu => menu.name === menuItemCategoryName
    );

    if (!menuCategory) return null;

    const menuItem = menuCategory.items.find(item => item.id === menuItemId);

    if (!menuItem || !lineItem) return null;

    return {
      uuid,
      menuItem,
      lineItem
    };
  }
);
