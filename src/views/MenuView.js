import React, { PureComponent } from 'react';
import { MenuHero, Menus, MenuStatus } from 'components';

class MenuView extends PureComponent {
  render() {
    const { currentLocation, menu, menuStatus } = this.props;
    const menuCategories = menu.menu.reduce(
      (items, item) => [...items, { value: item.slug, label: item.name }],
      []
    );

    return (
      <main className="container relative">
        <MenuHero location={currentLocation} menuCategories={menuCategories} />
        <Menus menu={menu} />
        <MenuStatus status={menuStatus} />
      </main>
    );
  }
}

export default MenuView;
