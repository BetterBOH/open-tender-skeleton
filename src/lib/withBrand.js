import React from 'react';
import { BrandContext } from 'config';

const withBrand = Component =>
  React.memo(props => (
    <BrandContext.Consumer>
      {context => <Component {...props} brandContext={context} />}
    </BrandContext.Consumer>
  ));

export default withBrand;
