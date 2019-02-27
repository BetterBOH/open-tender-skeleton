import React, { PureComponent } from 'react';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

class MenuView extends PureComponent {
  render() {
    return (
      <main className="container relative">
        <div className="flex flex-wrap flex-row-reverse">Menu</div>
      </main>
    );
  }
}

export default withComponents(withLocales(MenuView));
