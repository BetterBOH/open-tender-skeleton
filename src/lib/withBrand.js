import React from 'react';
import { BrandContext } from 'config';

const withConfig = Component =>
  React.memo(props => (
    <BrandContext.Consumer>
      {context => <Component {...props} brand={context} />}
    </BrandContext.Consumer>
  ));

export default withConfig;
