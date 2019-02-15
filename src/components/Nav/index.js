import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';

const Nav = React.memo(props => {
  // TODO: Replace mock customer data
  return RegistryLoader({ ...props }, 'components.Nav', () =>
    import('./presentation.js')
  );
});

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

export default Nav;
