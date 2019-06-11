import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';
import withLocales from 'lib/withLocales';
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

  handleClickIncrement = () => {
    const {
      actions,
      item,
      currentMenu,
      quantity,
      updateQuantity,
      localesContext
    } = this.props;

    if (!currentMenu) {
      return actions.createSystemNotification({
        message: localesContext.Language.t(
          'favorites.addLineItem.errors.noCurrentMenu'
        )
      });
    }

    if (!item) {
      return actions.createSystemNotification({
        message: localesContext.Language.t(
          'favorites.addLineItem.errors.notOnCurrentMenu',
          { location: get(currentMenu, 'name') }
        )
      });
    }

    if (get(item, 'option_groups.length')) {
      return updateQuantity(0, item.increment);
    }

    return updateQuantity(quantity, quantity + item.increment);
  };

  handleClickDecrement = () => {
    const { item, quantity, updateQuantity } = this.props;

    return updateQuantity(quantity, quantity - item.increment);
  };

  render() {
    const { favorite, item, quantity, currentMenu } = this.props;

    return RegistryLoader(
      {
        favorite,
        item,
        quantity,
        currentMenu,
        handleClickIncrement: this.handleClickIncrement,
        handleClickDecrement: this.handleClickDecrement
      },
      'components.FavoriteItem',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withLineItemActions(FavoriteItem));
