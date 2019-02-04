import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { StoreContext } from 'config';
import { store as defaultStore, history as defaultHistory } from 'state/store';

import get from 'utils/get';

const OTProvider = props => (
  <StoreContext.Consumer>
    {context => {
      const altStore = get(context, 'registry.state.store');
      const altHistory = get(context, 'registry.state.history');

      const store = altStore && altHistory ? altStore : defaultStore;
      const history = altStore && altHistory ? altHistory : defaultHistory;

      return (
        <Provider store={store}>
          <ConnectedRouter history={history}>{props.children}</ConnectedRouter>
        </Provider>
      );
    }}
  </StoreContext.Consumer>
);

export default OTProvider;
