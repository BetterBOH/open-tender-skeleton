import React from 'react';
import { MenuCategoryHeader, MenuCategoryItems } from 'components';
import MenuAppearances from 'constants/MenuAppearances';
import get from 'utils/get';

const MenuCategory = React.memo(({ menuCategory }) => {
  return (
    <div className="MenuCategory mb3">
      <MenuCategoryHeader menuCategory={menuCategory} />
      <MenuCategoryItems menuCategory={menuCategory} />
    </div>
  );
});

export default MenuCategory;
