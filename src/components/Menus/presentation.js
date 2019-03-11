import React from 'react';
import { MenuCategory } from 'components';

const Menus = React.memo(({ menu }) => {
  const categories = menu.menu;

  return (
    <div className="Menus bg-color-white px2">
      {categories.map(category => (
        <MenuCategory menuCategory={category} key={category.id} />
      ))}
    </div>
  );
});

export default Menus;
