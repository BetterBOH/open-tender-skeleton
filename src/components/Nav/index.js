import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Nav = React.memo(props =>
  RegistryLoader(props, 'components.Nav', () => import('./presentation.js'))
);

export default Nav;
