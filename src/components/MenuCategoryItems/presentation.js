import React from 'react';
import { MenuItemLarge, MenuItemMedium, MenuItemSmall } from 'components';
import MenuAppearances from 'constants/MenuAppearances';

const MenuCategoryItems = React.memo(
  ({ menuCategory, menuItemQuantities, menuItemFavorites }) => {
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
            key={item.id}
            item={item}
            quantity={menuItemQuantities ? menuItemQuantities[item.id] : 0}
            itemIsFavorited={menuItemFavorites.includes(item.id)}
          />
        ))}
      </div>
    );
  }
);

export default MenuCategoryItems;
