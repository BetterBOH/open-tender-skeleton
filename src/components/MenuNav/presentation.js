import React from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';

const MenuNav = React.memo(props => {
  const { menuTitle, selectedCategory, menuNavIsClicked, handleClick } = props;

  return (
    <nav className="MenuNav bg-color-white flex justify-between items-center p1">
      <Button
        className="MenuNav__button flex items-center"
        onClick={handleClick}
      >
        <Text
          size="description"
          className="color-gray"
          aria-label={selectedCategory || menuTitle}
        >
          {selectedCategory || menuTitle}
        </Text>
        <div className="MenuNav__icon ml_5">
          <Icon icon={menuNavIsClicked ? 'Dropup' : 'Dropdown'} fill="gray" />
        </div>
      </Button>
    </nav>
  );
});

export default MenuNav;
