import React from 'react';
import { ConfigContext } from 'config';
import get from 'utils/get';

const RegistryLoader = React.memo((props, registryKey, defaultPresentation) => (
  <ConfigContext.Consumer>
    {context => {
      const altImport = get(context, `registry.${registryKey}.import`);

      if (altImport) {
        if (typeof altImport === 'function') {
          const AlternatePresentation = React.lazy(altImport);
          return <AlternatePresentation {...props} {...context} />;
        } else {
          throw new Error(
            `Open Tender Skeleton: Your registry.${registryKey}.import statement must return a function with the dynamic import syntax`
          );
        }
      }

      const DefaultPresentation = React.lazy(defaultPresentation);
      return <DefaultPresentation {...props} {...context} />;
    }}
  </ConfigContext.Consumer>
));

export default RegistryLoader;
