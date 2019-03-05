import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemControls from 'lib/withLineItemControls';

class MenuItemSmall extends PureComponent {
  static defaultProps = {
    ...withLineItemControls.defaultProps
  };

  render() {
    const { item, updateQuantity } = this.props;
    return RegistryLoader(
      { item, updateQuantity },
      'components.MenuItemSmall',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemControls(MenuItemSmall);
