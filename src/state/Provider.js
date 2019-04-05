import React from 'react';
import { Provider } from 'react-redux';
import withStore from 'lib/withStore';

import get from 'utils/get';

const OTProvider = props => {
  const store = get(props, 'storeContext.store');

  return <Provider store={store}>{props.children}</Provider>;
};

export default withStore(OTProvider);
