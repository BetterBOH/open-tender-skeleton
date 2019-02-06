import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const OrderRating = props => {
  return RegistryLoader(props, 'components.OrderRating', () =>
    import('./presentation.js')
  );
};

OrderRating.propTypes = {
  interactive: PropTypes.bool,
  total: PropTypes.number,
  rating: PropTypes.number,
  icon: PropTypes.string
};

OrderRating.defaultProps = {
  interactive: true,
  total: 5,
  rating: 0,
  icon: 'Star'
};

export default OrderRating;
