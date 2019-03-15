import React from 'react';
import { Button, Text, Icon } from 'components';

const MenuNav = React.memo(props => {
  const {
    menuType,
    selectedCategory,
    menuNavIsClicked,
    handleClick,
    localesContext
  } = props;

  const { Language } = localesContext;
  const menuName = !!menuType
    ? `${menuType} ${Language.t('menu.menu')}`
    : Language.t('menu.menu');

  return (
    <nav className="MenuNav p1 bg-color-white flex justify-between items-center">
      <Button className="MenuNav__button flex" onClick={handleClick}>
        <Text
          size="description"
          className="color-gray"
          style={{ width: `${selectedCategory || menuName.length * 8}px` }}
          aria-label={selectedCategory || menuName}
        >
          {selectedCategory || menuName}
        </Text>
        <div className="MenuNav__icon">
          <Icon icon={menuNavIsClicked ? 'Dropup' : 'Dropdown'} fill="gray" />
        </div>
      </Button>
    </nav>
  );
});

export default MenuNav;
