import React from 'react';
import { MenuItemMedium } from 'components';

const MenuSectionItemsMedium = React.memo(({ items }) => (
  <div className="MenuSection__items MenuSection__items--medium flex flex-wrap">
    {items.map(item => (
      <MenuItemMedium item={item} />
    ))}
  </div>
));

export default MenuSectionItemsMedium;
