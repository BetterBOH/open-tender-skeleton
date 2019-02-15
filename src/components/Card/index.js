import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

const Card = React.memo(props =>
  RegistryLoader(props, 'components.Card', () => import('./presentation.js'))
);

export default Card;
