import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemControls from 'lib/withLineItemControls';
import withLocales from 'lib/withLocales';

class MenuItemSmall extends PureComponent {
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
      'components.MenuItemSmall',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withLineItemControls(MenuItemSmall));
