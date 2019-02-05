import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import { customer } from 'constants/Mocks';

const Nav = props => {
  // TODO: Replace mock customer data
  return RegistryLoader({ ...props, customer }, 'components.Nav', () =>
    import('./presentation.js')
  );
};

Nav.propTypes = {
  brand: PropTypes.shape({
    logoImage: PropTypes.string
  }),
  customer: PropTypes.object
};

Nav.defaultProps = {
  brand: {
    logoImage: ''
  },
  customer: {}
};

export default Nav;
