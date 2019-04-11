import React from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';

const MenuNav = React.memo(props => {
  const {
    menuTitle,
    selectedCategory,
    menuNavModalIsActive,
    handleClick
  } = props;

  return (
    <nav
      className={cx(
        'MenuNav relative col-12 bg-color-white flex justify-between items-center p1',
        {
          'fixed t0 l0 r0 z3': menuNavModalIsActive
        }
      )}
    >
      <Button
        className="MenuNav__button flex items-center"
        onClick={handleClick}
      >
        <Text
          size="description"
          className={
            menuNavModalIsActive ? 'text-bold color-black' : 'color-gray'
          }
          aria-label={selectedCategory || menuTitle}
        >
          {selectedCategory || menuTitle}
        </Text>
        <div className="MenuNav__icon ml_5">
          <Icon
            icon={menuNavModalIsActive ? 'Dropup' : 'Dropdown'}
            fill="gray"
          />
        </div>
      </Button>
    </nav>
  );
});

export default MenuNav;
