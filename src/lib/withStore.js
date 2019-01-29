import React from 'react';
import { StoreContext } from 'config';

const withStore = Component => props => (
  <StoreContext.Consumer>
    {context => <Component {...props} {...context} />}
  </StoreContext.Consumer>
);

export default withStore;
