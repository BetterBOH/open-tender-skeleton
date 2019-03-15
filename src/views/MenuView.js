import React, { PureComponent } from 'react';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { MenuHero, Menus, MenuStatus } from 'components';

class MenuView extends PureComponent {
  render() {
    const { currentLocation, menu, menuStatus, itemBeingEdited } = this.props;
    return (
      <main className="container relative">
        <MenuHero location={currentLocation} />
        <Menus menu={menu} />
        <MenuStatus status={menuStatus} />
      </main>
    );
  }
}

export default withComponents(withLocales(MenuView));
