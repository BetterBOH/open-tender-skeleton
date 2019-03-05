import React from 'react';
import { ConfigContext } from 'config';
import { ConfigContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withConfig = Component => {
  const Context = environmentIsMock() ? MockContext : ConfigContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <Component {...props} openTenderConfig={context} />}
    </Context.Consumer>
  ));
};

export default withConfig;
