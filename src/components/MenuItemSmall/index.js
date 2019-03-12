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
      allergenWarnings,
      localesContext
    } = this.props;

    return RegistryLoader(
      { item, updateQuantity, allergenWarnings, localesContext },
      'components.MenuItemSmall',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withLineItemControls(MenuItemSmall));
