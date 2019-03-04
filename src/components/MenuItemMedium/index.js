import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withMenuItem from 'lib/withMenuItem';

class MenuItemMedium extends PureComponent {
  static defaultProps = {
    ...withMenuItem.defaultProps
  };

  render() {
    const { item, quantity, updateQuantity } = this.props;
    return RegistryLoader(
      { item, quantity, updateQuantity },
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

export default withMenuItem(MenuItemMedium);
