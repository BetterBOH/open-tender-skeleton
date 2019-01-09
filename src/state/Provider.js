import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from 'state/store';

const OTProvider = props => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{props.children}</ConnectedRouter>
  </Provider>
);

export default OTProvider;
