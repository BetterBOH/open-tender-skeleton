import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import withLocales from 'lib/withLocales';

const Nav = React.memo(props =>
  RegistryLoader(props, 'components.Nav', () => import('./presentation.js'))
);

Nav.propTypes = {
  brand: PropTypes.shape({
    logoImage: PropTypes.string
  })
};

Nav.defaultProps = {
  brand: {
    logoImage: ''
  }
};

export { Nav };
export default withLocales(Nav);
