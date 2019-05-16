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

          const lineItemFromMenuItem = lineItems.find(
            lineItem => get(lineItem, 'productData.id') === menuItemId
          );

          if (lineItemFromMenuItem) {
            menuItemQuantities[menuItemId] = get(
              lineItemFromMenuItem,
              'quantity'
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
