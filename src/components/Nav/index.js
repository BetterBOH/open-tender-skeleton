import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Nav = React.memo(({ customer }) =>
  RegistryLoader({ customer }, 'components.Nav', () =>
    import('./presentation.js')
  )
);

export default Nav;
