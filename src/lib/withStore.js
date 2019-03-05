import React from 'react';
import { StoreContext } from 'config';
import { StoreContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withStore = Component => {
  const Context = environmentIsMock() ? MockContext : StoreContext;

  return React.memo(props => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  ));
};

export default withStore;
