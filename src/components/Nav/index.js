import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const Nav = React.memo(props =>
  RegistryLoader(props, 'components.Nav', () => import('./presentation.js'))
);

Nav.propTypes = {
  localesContext: PropTypes.shape({
    Language: PropTypes.object
  })
};

Nav.defaultProps = {
  localesContext: {
    Language: {}
  }
};

export default Nav;
