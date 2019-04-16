import React, { PureComponent, createRef } from 'react';
import cx from 'classnames';
import { Button, Text, Icon } from 'components';

import get from 'utils/get';
import debounce from 'utils/debounce';
import { SCROLL_DEBOUNCE_LIMIT } from 'constants/DebounceLimits';

class MenuNavigation extends PureComponent {
  constructor() {
    super(...arguments);

    this.menuNavRef = createRef();

    this.state = {
      scrolledOutOfView: false,
      scrollPositionYIsZero: true
    };
  }

  componentDidMount = () => {
    window.addEventListener(
      'scroll',
      debounce(this.handleScroll, SCROLL_DEBOUNCE_LIMIT)
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener(
      'scroll',
      debounce(this.handleScroll, SCROLL_DEBOUNCE_LIMIT)
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
      this.setState({ scrolledOutOfView, scrollPositionYIsZero: false });
    }

    if ((scrollPositionY === 0) & !this.state.scrollPositionYIsZero) {
      this.setState(prevState => ({
        ...prevState,
        scrollPositionYIsZero: true
      }));
    }
  };

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
          'MenuNavigation relative col-12 flex justify-between items-center bg-color-white border-bottom p1',
          {
            'fixed t0 l0 r0 z3':
              this.state.scrolledOutOfView ||
              menuNavigationDrawerIsActive ||
              menuNavigationModalIsActive
          }
        )}
        ref={this.menuNavRef}
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
                : 'color-gray'
            )}
            aria-label="Click to open menu jump selection"
          >
            {this.state.scrollPositionYIsZero
              ? menuTitle
              : currentCategory || menuTitle}
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
