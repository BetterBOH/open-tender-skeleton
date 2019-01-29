import React from 'react';
import { RoutesContext } from 'config';

const withRoutes = Component => props => (
  <RoutesContext.Consumer>
    {context => <Component {...props} {...context} />}
  </RoutesContext.Consumer>
);

export default withRoutes;
