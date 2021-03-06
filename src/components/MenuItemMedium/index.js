import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';
import withUser from 'lib/withUser';

import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuItemMedium extends PureComponent {
  static propTypes = {
    item: MenuItemModel.propTypes,
    userIsAuthenticated: PropTypes.bool,
    quantity: PropTypes.number
  };

  static defaultProps = {
    item: null,
    userIsAuthenticated: false,
    quantity: 0
  };

  render() {
    const {
      item,
      updateQuantity,
      quantity,
      allergenWarnings,
      userIsAuthenticated,
      favoriteId
    } = this.props;

    return RegistryLoader(
      {
        item,
        updateQuantity,
        quantity,
        allergenWarnings,
        userIsAuthenticated,
        favoriteId
      },
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

export default withUser(withLineItemActions(MenuItemMedium));
