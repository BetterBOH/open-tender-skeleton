import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Nav = React.memo(({ customer, brand }) =>
  RegistryLoader({ customer, brand }, 'components.Nav', () =>
    import('./presentation.js')
  )
);

export default Nav;
