import React from 'react';
import { ComponentsContext } from 'config';
import get from 'utils/get';

const RegistryLoader = (props, registryKey, defaultPresentation) => (
  <ComponentsContext.Consumer>
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
  </ComponentsContext.Consumer>
);

export default RegistryLoader;
