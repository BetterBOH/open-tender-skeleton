import React from 'react';
import get from 'utils/get';

export default (context, props, displayName) => {
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
};
