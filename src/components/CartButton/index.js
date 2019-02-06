import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const CartButton = props => {
  return RegistryLoader(props, 'components.CartButton', () =>
    import('./presentation.js')
  );
};

CartButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

CartButton.defaultProps = {
  icon: 'Bag',
  onClick: f => f
};

export default CartButton;
