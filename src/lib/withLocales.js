import React from 'react';
import { LocalesContext } from 'config';
import { LocalesContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withLocales = Component => {
  const Context = environmentIsMock() ? MockContext : LocalesContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <Component {...props} localesContext={context} />}
    </Context.Consumer>
  ));
};

export default withLocales;
