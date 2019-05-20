import React, { PureComponent } from 'react';
import { MenuHero, Menus, MenuStatus, MenuNavigation } from 'components';

class MenuView extends PureComponent {
  render() {
    const {
      currentLocation,
      menu,
      menuStatus,
      currentMenuQuantities
    } = this.props;

    return (
      <main className="container relative bg-color-white">
        <MenuHero location={currentLocation} menu={menu} />
        <MenuNavigation menu={menu} />
        <Menus menu={menu} currentMenuQuantities={currentMenuQuantities} />
        <MenuStatus status={menuStatus} />
      </main>
    );
  }
}

export default MenuView;
