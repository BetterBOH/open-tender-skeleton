import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Spinner = React.memo(props =>
  RegistryLoader(props, 'components.Spinner', () => import('./presentation.js'))
);

export default Spinner;
