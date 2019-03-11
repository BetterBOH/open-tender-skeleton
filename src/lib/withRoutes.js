import React from 'react';
import { RoutesContext } from 'config';
import { RoutesContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withRoutes = Component => {
  const Context = environmentIsMock() ? MockContext : RoutesContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <Component {...props} routesContext={context} />}
    </Context.Consumer>
  ));
};

export default withRoutes;
