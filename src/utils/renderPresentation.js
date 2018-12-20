import React from 'react';

import { ConfigContext } from 'config';
import get from 'utils/get';

export default (props, displayName) => (
  <ConfigContext.Consumer>
    {context => {
      const PrimaryPresentation = React.lazy(() =>
        import(`components/${displayName}/presentation`)
      );

      const AlternatePresentation = get(
        context,
        `registry.components.${displayName}.component`
      );

      return AlternatePresentation ? (
        <AlternatePresentation {...props} {...context} />
      ) : (
        <PrimaryPresentation {...props} {...context} />
      );
    }}
  </ConfigContext.Consumer>
);
