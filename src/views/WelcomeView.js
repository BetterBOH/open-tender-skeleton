import React, { Component } from 'react';

import { WelcomeOrderType } from 'components';

class WelcomeView extends Component {
  render() {
    const { brand, actions, orderRef } = this.props;

    return (
      <main className="container flex items-center">
        <div className="relative overflow-auto col-12 md:col-5 lg:col-4 md:ml4 p1">
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

export default WelcomeView;
