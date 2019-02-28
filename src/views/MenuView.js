import React, { PureComponent } from 'react';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { MenuHero } from 'components';

class MenuView extends PureComponent {
  render() {
    const { currentLocation } = this.props;

    return (
      <main className="container relative">
        <MenuHero location={currentLocation} />
      </main>
    );
  }
}

export default withComponents(withLocales(MenuView));
