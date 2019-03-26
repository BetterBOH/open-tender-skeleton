import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import withLineItemActions from 'lib/withLineItemActions';

class MenuItemSmall extends PureComponent {
  static defaultProps = {
    ...withLineItemActions.defaultProps
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

export default withLocales(withLineItemActions(MenuItemSmall));
