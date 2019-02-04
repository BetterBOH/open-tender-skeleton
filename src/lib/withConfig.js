import React from 'react';
import { ConfigContext } from 'config';

const withConfig = Component =>
  React.memo(props => (
    <ConfigContext.Consumer>
      {context => <Component {...props} openTenderConfig={context} />}
    </ConfigContext.Consumer>
  ));

export default withConfig;
