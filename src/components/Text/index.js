import React from 'react';
import { ConfigContext } from 'config';
import renderPresentation from 'utils/renderPresentation';

export default props => (
  <ConfigContext.Consumer>
    {context => renderPresentation(context, props, 'Text')}
  </ConfigContext.Consumer>
);
