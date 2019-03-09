import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import withBrand from 'lib/withBrand';

const Nav = React.memo(props =>
  RegistryLoader(props, 'components.Nav', () => import('./presentation.js'))
);

Nav.propTypes = {
  brandContext: PropTypes.shape({
    logoImage: PropTypes.string
  }),
  localesContext: PropTypes.shape({
    Language: PropTypes.object
  })
};

Nav.defaultProps = {
  brandContext: {
    logoImage: ''
  },
  localesContext: {
    Language: {}
  }
};

export default withBrand(Nav);
