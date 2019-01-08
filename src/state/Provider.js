import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from 'state/store';

const Provider = props => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </ReduxProvider>
);

export default Provider;
