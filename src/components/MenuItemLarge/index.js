import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';
import withUser from 'lib/withUser';

import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuItemLarge extends PureComponent {
  static propTypes = {
    item: MenuItemModel.propTypes,
    quantity: PropTypes.number,
    userIsAuthenticated: PropTypes.bool
  };

  static defaultProps = {
    item: null,
    quantity: 0,
    userIsAuthenticated: false
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
      'components.MenuItemLarge',
      () => import('./presentation.js')
    );
  }
}

export default withUser(withLineItemActions(MenuItemLarge));
