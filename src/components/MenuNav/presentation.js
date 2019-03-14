import React from 'react';
import get from 'utils/get';
import { Icon } from 'components';
import ScrollOption from '../ScrollTo/ScrollOption';

const MenuNav = React.memo(props => {
  const {
    menuCategories,
    selectedCategory,
    handleChange,
    handleSetActive
  } = props;

  return (
    <nav className="MenuNav p1 bg-color-white flex justify-between items-center">
      <div className="MenuNav__select-wrapper flex">
        <select
          className="Text--size-description color-gray bg-color-white"
          value={selectedCategory}
          style={{ width: `${selectedCategory.length * 8}px` }}
          onChange={handleChange}
        >
          {menuCategories.map(category => (
            <ScrollOption
              spy
              key={get(category, 'id')}
              to={get(category, 'slug')}
              value={get(category, 'name')}
              onSetActive={() => handleSetActive(get(category, 'name'))}
            >
              {get(category, 'name')}
            </ScrollOption>
          ))}
        </select>
        <div className="MenuNav__icon">
          <Icon icon="Dropdown" fill="gray" />
        </div>
      </div>
    </nav>
  );
});

export default MenuNav;
