import React from 'react';
import { BrandContext } from 'config';
import environmentIsMock from 'utils/environmentIsMock';

const withBrand = Component => {
  const Context = environmentIsMock() ? 'mock' : 'not mock';

  return React.memo(props => (
    <BrandContext.Consumer>
      {context => <Component {...props} brandContext={context} />}
    </BrandContext.Consumer>
  ));
};

export default withBrand;
