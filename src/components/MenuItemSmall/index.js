import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';

class MenuItemSmall extends PureComponent {
  render() {
    const { item, updateQuantity, allergenWarnings } = this.props;

    return RegistryLoader(
      { item, updateQuantity, allergenWarnings },
      'components.MenuItemSmall',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(MenuItemSmall);
