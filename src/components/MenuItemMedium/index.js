import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
<<<<<<< HEAD
import withLineItemControls from 'lib/withLineItemControls';
import withLocales from 'lib/withLocales';
=======
import withLineItemActions from 'lib/withLineItemActions';
>>>>>>> rename withLineItemControls to withLineItemActions

class MenuItemMedium extends PureComponent {
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
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

<<<<<<< HEAD
export default withLocales(withLineItemControls(MenuItemMedium));
=======
export default withLineItemActions(MenuItemMedium);
>>>>>>> rename withLineItemControls to withLineItemActions
