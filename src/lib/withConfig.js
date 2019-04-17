import React from 'react';
import { ConfigContext } from 'config';
import { ConfigContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withConfig = WrappedComponent => {
  const Context = environmentIsMock() ? MockContext : ConfigContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <WrappedComponent {...props} openTenderConfig={context} />}
    </Context.Consumer>
  ));
};

export default withConfig;
