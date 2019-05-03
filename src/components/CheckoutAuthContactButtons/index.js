import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class CheckoutAuthContactButtons extends PureComponent {
  static propTypes = {
    editAttributePath: PropTypes.string,
    handleClickCheckoutAsGuest: PropTypes.func
  };

  static defaultProps = {
    editAttributePath: '',
    handleClickCheckoutAsGuest: f => f
  };

  render() {
    const { editAttributePath, handleClickCheckoutAsGuest } = this.props;

    return RegistryLoader(
      { editAttributePath, handleClickCheckoutAsGuest },
      'components.CheckoutAuthContactButtons',
      () => import('./presentation.js')
    );
  }
}

export default CheckoutAuthContactButtons;
