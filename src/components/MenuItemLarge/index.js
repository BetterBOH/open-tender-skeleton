import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';
import withUser from 'lib/withUser';

class MenuItemLarge extends PureComponent {
  static defaultProps = {
    ...withLineItemActions.defaultProps
  };

  render() {
    const {
      item,
      updateQuantity,
      allergenWarnings,
      userIsAuthenticated
    } = this.props;

    return RegistryLoader(
      {
        item,
        updateQuantity,
        allergenWarnings,
        userIsAuthenticated
      },
      'components.MenuItemLarge',
      () => import('./presentation.js')
    );
  }
}

export default withUser(withLineItemActions(MenuItemLarge));
