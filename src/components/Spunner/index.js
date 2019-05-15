import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

const Spunner = React.memo(props =>
  RegistryLoader(props, 'components.Spunner', () => import('./presentation.js'))
);

export default Spunner;
