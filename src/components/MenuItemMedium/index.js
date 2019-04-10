import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';

class MenuItemMedium extends PureComponent {
  static defaultProps = {
    ...withLineItemActions.defaultProps
  };

  render() {
    const { item, updateQuantity, allergenWarnings } = this.props;

    return RegistryLoader(
      { item, updateQuantity, allergenWarnings },
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(MenuItemMedium);
