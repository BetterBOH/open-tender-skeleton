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
      <nav className="MenuNavigation col-12 flex justify-between items-center bg-color-white border-bottom py1 px1_5">
        <Button
          className="MenuNavigation__button flex items-center"
          onClick={handleMenusClick}
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
        {userIsAuthenticated && (
          <div className="MenuNavigation__allergen-filter-button pl1 flex items-center">
            <Button onClick={handleFiltersClick}>
              <Icon icon="Filter" fill={get(brandContext, 'colors.gray')} />
            </Button>
          </div>
        )}
      </nav>
    );
  }
}

export default MenuNavigation;
