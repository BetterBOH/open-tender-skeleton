import React from 'react';
import { Icon } from 'components';

const MenuNav = React.memo(props => {
  const { menuCategories, selectedCategory, handleChange } = props;

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
            <option
              key={category.value}
              to={category.value}
              value={category.label}
            >
              {category.label}
            </option>
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
