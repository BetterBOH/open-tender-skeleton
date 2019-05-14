import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Footer = React.memo(props =>
  RegistryLoader(props, 'components.Footer', () => import('./presentation.js'))
);

export default Footer;
