import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class CheckoutContact extends PureComponent {
  render() {
    return RegistryLoader({}, 'components.CheckoutContact', () =>
      import('./presentation.js')
    );
  }
}

export default CheckoutContact;
