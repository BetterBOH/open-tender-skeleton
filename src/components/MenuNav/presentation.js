import React from 'react';
import cx from 'classnames';
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
    <nav
      className={cx(
        'MenuNav p1 bg-color-white flex justify-between items-center',
        {
          'absolute t0 w100': menuNavIsClicked
        }
      )}
    >
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
