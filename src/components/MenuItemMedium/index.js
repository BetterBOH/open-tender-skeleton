import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';

import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuItemMedium extends PureComponent {
  static propTypes = {
    item: MenuItemModel.propTypes,
    userIsAuthenticated: PropTypes.bool,
    currentQuantity: PropTypes.number
  };

  static defaultProps = {
    item: null,
    userIsAuthenticated: false,
    currentQuantity: 0
  };

  render() {
    const {
      item,
      updateQuantity,
      currentQuantity,
      allergenWarnings
    } = this.props;

    return RegistryLoader(
      { item, updateQuantity, currentQuantity, allergenWarnings },
      'components.MenuItemMedium',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(MenuItemMedium);
