import React from 'react';
import { ComponentsContext } from 'config';
import get from 'utils/get';

const RegistryCache = {};

const RegistryLoader = (props, registryKey, defaultPresentation) => (
  <ComponentsContext.Consumer>
    {context => {
      if (get(RegistryCache, registryKey)) {
        const CachedComponent = get(RegistryCache, registryKey);
        return <CachedComponent {...props} componentsContext={context} />;
      }

      const altImport = get(context, `registry.${registryKey}.import`);

      if (altImport) {
        if (typeof altImport === 'function') {
          const AlternatePresentation = React.lazy(altImport);
          RegistryCache[registryKey] = AlternatePresentation;
          return (
            <AlternatePresentation {...props} componentsContext={context} />
          );
        } else {
          throw new Error(
            `Open Tender Skeleton: Your registry.${registryKey}.import statement must return a function with the dynamic import syntax`
          );
        }
      }

      const DefaultPresentation = React.lazy(defaultPresentation);
      RegistryCache[registryKey] = DefaultPresentation;
      return <DefaultPresentation {...props} componentsContext={context} />;
    }}
  </ComponentsContext.Consumer>
);

export default RegistryLoader;
