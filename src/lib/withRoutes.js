import React from 'react';
import { RoutesContext } from 'config';

const withRoutes = Component =>
  React.memo(props => (
    <RoutesContext.Consumer>
      {context => <Component {...props} routesContext={context} />}
    </RoutesContext.Consumer>
  ));

export default withRoutes;
