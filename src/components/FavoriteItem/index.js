import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';
import get from 'utils/get';

import FavoriteModel from 'constants/Models/FavoriteModel';
import LineItemModel from 'constants/Models/LineItemModel';

class FavoriteItem extends PureComponent {
  static propTypes = {
    favorite: FavoriteModel.propTypes,
    item: LineItemModel.propTypes,
    quantity: PropTypes.number
  };

  static defaultProps = {
    favorite: null,
    item: null,
    quantity: 0
  };

  handleClickAddToCart = () => {
    const { actions, item, currentMenu, updateQuantity } = this.props;

    if (!currentMenu) {
      return actions.createSystemNotification({
        message: 'Please start an order before adding favorites.'
      });
    }

    if (!item) {
      return actions.createSystemNotification({
        message: 'This item cannot be ordered from the current location.'
      });
    }

    if (get(item, 'option_groups.length')) {
      return updateQuantity(0, item.increment);
    }
  };

  render() {
    const {
      favorite,
      item,
      quantity,
      updateQuantity,
      currentMenu
    } = this.props;

    return RegistryLoader(
      {
        favorite,
        item,
        quantity,
        updateQuantity,
        currentMenu,
        handleClickAddToCart: this.handleClickAddToCart
      },
      'components.FavoriteItem',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(FavoriteItem);
