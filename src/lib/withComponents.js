import React from 'react';
import { ComponentsContext } from 'config';
import { ComponentsContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withComponents = Component => {
  const Context = environmentIsMock() ? MockContext : ComponentsContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <Component {...props} componentsContext={context} />}
    </Context.Consumer>
  ));
};

export default withComponents;
