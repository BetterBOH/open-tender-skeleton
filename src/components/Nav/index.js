import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import CustomerModel from 'constants/Models/CustomerModel';
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
  customer: CustomerModel.propTypes
};

Nav.defaultProps = {
  brand: {
    logoImage: ''
  },
  customer: CustomerModel.defaultProps
};

export default Nav;
