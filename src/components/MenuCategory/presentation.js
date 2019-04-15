import React from 'react';
import { MenuCategoryHeader, MenuCategoryItems } from 'components';
import ScrollToSection from 'components/ScrollTo/ScrollToSection';
import get from 'utils/get';

const MenuCategory = React.memo(({ menuCategory }) => {
  return (
    <div className="MenuCategory mb3">
      <ScrollToSection
        key={get(menuCategory, 'id')}
        sectionName={get(menuCategory, 'slug')}
      >
        <MenuCategoryHeader menuCategory={menuCategory} />
        <MenuCategoryItems menuCategory={menuCategory} />
      </ScrollToSection>
    </div>
  );
});

export default MenuCategory;
