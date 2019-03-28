import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';
import withLocales from 'lib/withLocales';
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
      localesContext,
      userIsAuthenticated
    } = this.props;

    console.log('xxx', this.props);
    return RegistryLoader(
      {
        item,
        updateQuantity,
        allergenWarnings,
        localesContext,
        userIsAuthenticated
      },
      'components.MenuItemLarge',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withUser(withLineItemActions(MenuItemLarge)));
