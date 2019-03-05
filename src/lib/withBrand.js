import React from 'react';
import { BrandContext } from 'config';
import { BrandContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

const withBrand = Component => {
  const Context = environmentIsMock() ? MockContext : BrandContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => <Component {...props} brandContext={context} />}
    </Context.Consumer>
  ));
};

export default withBrand;
