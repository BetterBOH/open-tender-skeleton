import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';
import debounce from 'utils/debounce';
import { MENU_NAV_SCROLL } from 'constants/DebounceLimits';

class MenuNav extends PureComponent {
  constructor() {
    super(...arguments);

    this.menuNavRef = createRef();

    this.state = {
      scrolledOutOfView: false
    };
  }

  componentDidMount = () => {
    window.addEventListener(
      'scroll',
      debounce(this.handleScroll, MENU_NAV_SCROLL)
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener(
      'scroll',
      debounce(this.handleScroll, MENU_NAV_SCROLL)
    );
  };

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    const menuNav = this.menuNavRef.current;
    const menuNavHeight = menuNav.clientHeight;
    const menuNavDistanceFromViewportTop = menuNav.getBoundingClientRect().top;
    const scrolledOutOfView =
      scrollPositionY > menuNavDistanceFromViewportTop + menuNavHeight;

    if (this.state.scrolledOutOfView !== scrolledOutOfView) {
      this.setState({ scrolledOutOfView });
    }
  };

  render() {
    const {
      menuTitle,
      selectedCategory,
      menuNavigationIsActive,
      handleClick
    } = this.props;

    return (
      <nav
        className={cx(
          'MenuNav relative col-12 flex justify-between items-center bg-color-white border-bottom p1',
          {
            'fixed t0 l0 r0 z3':
              this.state.scrolledOutOfView || menuNavigationIsActive
          }
        )}
        ref={this.menuNavRef}
      >
        <Button
          className="MenuNav__button flex items-center"
          onClick={handleClick}
        >
          <Text
            size="description"
            className={
              menuNavigationIsActive ? 'text-bold color-black' : 'color-gray'
            }
            aria-label={selectedCategory || menuTitle}
          >
            {selectedCategory || menuTitle}
          </Text>
          <div className="MenuNav__icon ml_5">
            <Icon
              icon={menuNavigationIsActive ? 'Dropup' : 'Dropdown'}
              fill="gray"
            />
          </div>
        </Button>
      </nav>
    );
  }
}

export default MenuNav;
