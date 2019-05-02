import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import CustomerModel from 'constants/Models/CustomerModel';

class CheckoutAuthContact extends PureComponent {
  static propTypes = {
    customer: CustomerModel.propTypes,
    handleClickCheckoutAsGuest: PropTypes.func
  };

  static defaultProps = {
    customer: CustomerModel.defaultProps,
    handleClickCheckoutAsGuest: f => f
  };

  render() {
    const { customer, handleClickCheckoutAsGuest } = this.props;

    return RegistryLoader(
      {
        customer,
        handleClickCheckoutAsGuest
      },
      'components.CheckoutAuthContact',
      () => import('./presentation.js')
    );
  }
}

export default CheckoutAuthContact;
