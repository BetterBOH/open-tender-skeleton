import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Loader = React.memo((props = {}) =>
  RegistryLoader(props, 'components.Loader', () => import('./presentation.js'))
);

export default Loader;
