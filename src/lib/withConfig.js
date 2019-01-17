import React from 'react';
import { ConfigContext } from 'config';

const withConfig = Component => props => (
  <ConfigContext.Consumer>
    {context => <Component {...props} {...context} />}
  </ConfigContext.Consumer>
);

export default withConfig;
