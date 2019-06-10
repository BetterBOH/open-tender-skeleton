import React, { PureComponent } from 'react';
import cx from 'classnames';
import {
  Button,
  Text,
  Icon,
  Dropdown,
  MenuNavigationLinks,
  MenuFilters
} from 'components';
import get from 'utils/get';

class MenuNavigation extends PureComponent {
  render() {
    const {
      menu,
      currentCategory,
      menuNavigationDrawerIsActive,
      menuNavigationDropdownIsActive,
      menuNavigationData,
      filterDropdownIsActive,
      handleMenusClick,
      closeMenuNavigationDropdown,
      handleFiltersClick,
      closeFiltersDropdown,
      localesContext,
      brandContext
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
              menuNavigationDrawerIsActive || menuNavigationDropdownIsActive
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
                menuNavigationDrawerIsActive || menuNavigationDropdownIsActive
                  ? 'Dropup'
                  : 'Dropdown'
              }
            />
          </div>
        </Button>
        <div className="MenuNavigation__dropdown-container absolute l0">
          <Dropdown
            dropdownIsActive={menuNavigationDropdownIsActive}
            onClose={closeMenuNavigationDropdown}
          >
            <MenuNavigationLinks data={menuNavigationData} />
          </Dropdown>
        </div>
        <div className="MenuNavigation__allergen-filter-button pl1 flex items-center">
          <Button onClick={handleFiltersClick}>
            <Icon
              icon="Filter"
              fill={get(brandContext, 'colors[gray-light]')}
              variant="small"
            />
          </Button>
          <div className="MenuNavigation__dropdown-container absolute r0">
            <Dropdown
              dropdownIsActive={filterDropdownIsActive}
              onClose={closeFiltersDropdown}
            >
              <MenuFilters />
            </Dropdown>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuNavigation;
