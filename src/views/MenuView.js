import React, { PureComponent } from 'react';
import { MenuHero, Menus, MenuStatus } from 'components';

class MenuView extends PureComponent {
  render() {
    const { currentLocation, menu, menuStatus } = this.props;

    return (
      <main className="container relative">
        <MenuHero location={currentLocation} />
        <Menus menu={menu} />
        <MenuStatus status={menuStatus} />
      </main>
    );
  }
}

export default MenuView;
