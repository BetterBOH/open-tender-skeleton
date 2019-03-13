import React, { PureComponent } from 'react';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { MenuHero, Menus } from 'components';

class MenuView extends PureComponent {
  render() {
    const { currentLocation, menu } = this.props;
    return (
      <main className="container relative">
        <MenuHero location={currentLocation} />
        <Menus menu={menu} />
      </main>
    );
  }
}

export default withComponents(withLocales(MenuView));
