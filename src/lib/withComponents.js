import React from 'react';
import { ComponentsContext } from 'config';

const withComponents = Component =>
  React.memo(props => (
    <ComponentsContext.Consumer>
      {context => <Component {...props} {...context} />}
    </ComponentsContext.Consumer>
  ));

export default withComponents;
