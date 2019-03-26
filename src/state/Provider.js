import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import withStore from 'lib/withStore';

import get from 'utils/get';

const OTProvider = props => {
  const store = get(props, 'storeContext.store');
  const history = get(props, 'storeContext.history');

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>{props.children}</ConnectedRouter>
    </Provider>
  );
};

export default withStore(OTProvider);
