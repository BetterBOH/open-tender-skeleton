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
        <div
          style={{
            backgroundColor: 'orange',
            width: '200px',
            borderRadius: '2px',
            margin: '10px',
            textAlign: 'center',
            height: '24px',
            pointer: 'cursor'
          }}
          onClick={() => {
            this.props.history.push('/checkout');
          }}
        >
          Checkout
        </div>
        <Menus menu={menu} />
      </main>
    );
  }
}

export default withComponents(withLocales(MenuView));
