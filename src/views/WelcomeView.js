import React, { Component } from 'react';
import withComponents from 'lib/withComponents';

import { CartButton, WelcomeOrderType } from 'components';

class WelcomeView extends Component {
  render() {
    const { localesContext, mapbox, brand, actions, orderRef } = this.props;

    const { Language } = localesContext;
    const orderTypes = get(brand, 'order_types', orderTypesStub);

    return (
      <main className="container">
        <CartButton className="absolute b0 r0 mr3 mb1 none md:block z1" />
        <div className="relative overflow-auto p1 md:p2">
          <WelcomeOrderType
            actions={actions}
            brand={brand}
            orderRef={orderRef}
          />
        </div>
      </main>
    );
  }
}

export default withComponents(WelcomeView);
