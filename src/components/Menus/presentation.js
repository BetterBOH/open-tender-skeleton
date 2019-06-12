import React from 'react';
import { MenuCategory } from 'components';

import get from 'utils/get';

const Menus = React.memo(
  ({ menu, currentMenuQuantities, currentMenuFavorites }) => {
    const categories = get(menu, 'menu', []);

    return (
      <div className="Menus bg-color-white px2">
        {categories.map(category => (
          <MenuCategory
            menuCategory={category}
            key={category.id}
            menuItemQuantities={get(currentMenuQuantities, category.id)}
            menuItemFavorites={get(currentMenuFavorites, category.id)}
          />
        ))}
      </div>
    );
  }
);

export default Menus;
