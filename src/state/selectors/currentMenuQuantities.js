import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

import { currentMenu } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => currentMenu(state),
  state => get(state, 'openTender.session.order.lineItemsData'),
  (currentMenu, lineItems) => {
    const menuCategories = get(currentMenu, 'menu', []);

    if (
      !currentMenu ||
      !menuCategories.length ||
      !lineItems ||
      !lineItems.length
    ) {
      return null;
    }

    return menuCategories.reduce((menuCategoryQuantites, menuCategory) => {
      const currentMenuCategoryQuantities = menuCategory.items.reduce(
        (menuItemQuantities, menuItem) => {
          const menuItemId = get(menuItem, 'id');

          const lineItemsFromMenuItem = lineItems.filter(
            lineItem => get(lineItem, 'productData.id') === menuItemId
          );

          if (lineItemsFromMenuItem.length) {
            menuItemQuantities[menuItemId] = lineItemsFromMenuItem.reduce(
              (totalQuantity, lineItem) => {
                return (totalQuantity += get(lineItem, 'quantity'));
              },
              0
            );
          }

          return menuItemQuantities;
        },
        {}
      );

      if (!isEmpty(currentMenuCategoryQuantities)) {
        menuCategoryQuantites[menuCategory.id] = currentMenuCategoryQuantities;
      }

      return menuCategoryQuantites;
    }, {});
  }
);
