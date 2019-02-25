import React from 'react';
import { StoreContext } from 'config';

const withStore = Component =>
  React.memo(props => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  ));

export default withStore;
