import React, { Component } from 'react';
import get from 'utils/get';
import withComponents from 'lib/withComponents';

import { WelcomeOrderType } from 'components';

class WelcomeView extends Component {
  render() {
    const { brand, actions, orderRef } = this.props;

    return (
      <main className="container">
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
