import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';

class QuantitySpinner extends PureComponent {
  static propTypes = {
    quantity: PropTypes.number,
    max: PropTypes.number,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    isDisabled: PropTypes.bool,
    increment: PropTypes.number
  };

  static defaultProps = {
    quantity: 0,
    max: null,
    handleIncrement: f => f,
    handleDecrement: f => f,
    isDisabled: false,
    increment: 1
  };

  handleIncrement = () => {
    const { quantity, increment, handleIncrement } = this.props;

    return handleIncrement(quantity + increment);
  };

  handleDecrement = () => {
    const { quantity, increment, handleDecrement } = this.props;

    return handleDecrement(quantity - increment);
  };

  render() {
    const { quantity, max, isDisabled } = this.props;

    return RegistryLoader(
      {
        quantity,
        max,
        isDisabled,
        handleDecrement: this.handleDecrement,
        handleIncrement: this.handleIncrement
      },
      'components.QuantitySpinner',
      () => import('./presentation.js')
    );
  }
}

export default QuantitySpinner;
