import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Footer = React.memo(({ brand }) =>
  RegistryLoader({ brand }, 'components.Footer', () =>
    import('./presentation.js')
  )
);

export default Footer;
