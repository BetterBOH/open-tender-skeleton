import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemControls from 'lib/withLineItemControls';
import withLocales from 'lib/withLocales';

class MenuItemMedium extends PureComponent {
  static defaultProps = {
    ...withLineItemControls.defaultProps
  };

  render() {
    const {
      item,
      updateQuantity,
      allergenFilters,
      localesContext
    } = this.props;

    return RegistryLoader(
      { item, updateQuantity, allergenFilters, localesContext },
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withLineItemControls(MenuItemMedium));
