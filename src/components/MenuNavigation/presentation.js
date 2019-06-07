import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';
import get from 'utils/get';

class MenuNavigation extends PureComponent {
  render() {
    const {
      menu,
      menuNavigationDrawerIsActive,
      menuNavigationModalIsActive,
      currentCategory,
      handleMenusClick,
      handleFiltersClick,
      localesContext,
      brandContext,
      userIsAuthenticated
    } = this.props;

    const daypart = get(menu, 'daypart.daypart');
    const menuTitle = !!daypart
      ? `${daypart} ${localesContext.Language.t('menu.title')}`
      : localesContext.Language.t('menu.title');

    return (
      <nav className="MenuNavigation col-12 flex justify-between items-center bg-color-white border-bottom p1">
        <Button
          className="MenuNavigation__button flex items-center"
          onClick={handleMenusClick}
        >
          <Text
            size="description"
            className={cx(
              'capitalize',
              menuNavigationDrawerIsActive || menuNavigationModalIsActive
                ? 'color-black'
                : 'color-gray-dark hover-color-black'
            )}
          >
            {currentCategory || menuTitle}
          </Text>
          <div className="MenuNavigation__icon ml_5">
            <Icon
              variant="small"
              icon={
                menuNavigationDrawerIsActive || menuNavigationModalIsActive
                  ? 'Dropup'
                  : 'Dropdown'
              }
            />
          </div>
        </Button>
        <div className="MenuNavigation__allergen-filter-button pl1 flex items-center">
          <Button onClick={handleFiltersClick}>
            <Icon
              icon="Filter"
              fill={get(brandContext, 'colors[gray-light]')}
              variant="small"
            />
          </Button>
        </div>
      </nav>
    );
  }
}

export default MenuNavigation;
