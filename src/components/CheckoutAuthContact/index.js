import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import CustomerModel from 'constants/Models/CustomerModel';

class CheckoutAuthContact extends PureComponent {
  static propTypes = {
    customer: CustomerModel.propTypes
  };

  static defaultProps = {
    customer: CustomerModel.defaultProps
  };

  render() {
    const { customer } = this.props;

    return RegistryLoader({ customer }, 'components.CheckoutAuthContact', () =>
      import('./presentation.js')
    );
  }
}

export default CheckoutAuthContact;
