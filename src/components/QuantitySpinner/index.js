import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';

const QuantitySpinner = props => {
  return RegistryLoader(props, 'components.QuantitySpinner', () =>
    import('./presentation.js')
  );
};

QuantitySpinner.propTypes = {
  quantity: PropTypes.number,
  max: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  disabled: PropTypes.bool
};

QuantitySpinner.defaultProps = {
  quantity: 0,
  max: null,
  handleIncrement: f => f,
  handleDecrement: f => f,
  disabled: false
};

export default QuantitySpinner;
