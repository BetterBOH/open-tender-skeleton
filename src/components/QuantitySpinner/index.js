import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';

const QuantitySpinner = props => {
  return RegistryLoader(props, 'components.QuantitySpinner', () =>
    import('./presentation.js')
  );
};

QuantitySpinner.propTypes = {
  quantity: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func
};

QuantitySpinner.defaultProps = {
  quantity: 0,
  handleIncrement: f => f,
  handleDecrement: f => f
};

export default QuantitySpinner;
