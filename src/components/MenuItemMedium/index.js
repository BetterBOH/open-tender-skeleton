import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemControls from 'lib/withLineItemControls';

class MenuItemMedium extends PureComponent {
  static defaultProps = {
    ...withLineItemControls.defaultProps
  };

  render() {
    const { item, updateQuantity, localesContext } = this.props;
    return RegistryLoader(
      { item, updateQuantity, localesContext },
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemControls(MenuItemMedium);
