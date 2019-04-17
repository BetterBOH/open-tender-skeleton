import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';

import get from 'utils/get';
import throttle from 'utils/throttle';
import EventListeners from 'constants/EventListeners';

class MenuNavigation extends PureComponent {
  render() {
    const {
      menu,
      menuNavigationDrawerIsActive,
      menuNavigationModalIsActive,
      currentCategory,
      handleClick,
      localesContext
    } = this.props;

    const daypart = get(menu, 'daypart.daypart');
    const menuTitle = !!daypart
      ? `${daypart} ${localesContext.Language.t('menu.title')}`
      : localesContext.Language.t('menu.title');

    return (
      <nav
        className={cx(
          'MenuNavigation col-12 flex justify-between items-center bg-color-white border-bottom p1',
          'stick-to-nav t0 l0 z2 border-bottom'
        )}
      >
        <Button
          className="MenuNavigation__button flex items-center"
          onClick={handleClick}
        >
          <Text
            size="description"
            className={cx(
              'capitalize',
              menuNavigationDrawerIsActive || menuNavigationModalIsActive
                ? 'text-bold color-black'
                : 'color-gray-dark'
            )}
            aria-label="Click to open menu jump selection"
          >
            {currentCategory || menuTitle}
          </Text>
          <div className="MenuNavigation__icon ml_5">
            <Icon
              icon={
                menuNavigationDrawerIsActive || menuNavigationModalIsActive
                  ? 'Dropup'
                  : 'Dropdown'
              }
            />
          </div>
        </Button>
      </nav>
    );
  }
}

export default MenuNavigation;
