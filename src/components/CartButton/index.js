import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const CartButton = props => {
  return RegistryLoader(props, 'components.CartButton', () =>
    import('./presentation.js')
  );
};

CartButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string
};

CartButton.defaultProps = {
  className: '',
  onClick: f => f,
  icon: 'Bag'
};

export default CartButton;
