import React from 'react';
import get from 'utils/get';
import { MenuItemLarge, MenuItemMedium, MenuItemSmall } from 'components';
import MenuAppearances from 'constants/MenuAppearances';
// TODO: Replace with authenticated customer allergen data
import { customer } from 'constants/Mocks';

const MenuCategoryItems = React.memo(({ menuCategory }) => {
  const { appearance, items } = menuCategory;
  let ItemComponent;
  switch (appearance) {
    case MenuAppearances.SMALL:
      ItemComponent = MenuItemSmall;
      break;
    case MenuAppearances.MEDIUM:
      ItemComponent = MenuItemMedium;
      break;
    case MenuAppearances.LARGE:
      ItemComponent = MenuItemLarge;
      break;
    default:
      ItemComponent = MenuItemSmall;
  }

  return (
    <div className="MenuCategoryItems flex flex-wrap">
      {items.map(item => (
        <ItemComponent
          item={item}
          allergenFilters={get(customer, 'allergens')}
        />
      ))}
    </div>
  );
});

export default MenuCategoryItems;
