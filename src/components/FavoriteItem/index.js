import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';

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

  render() {
    const { favorite, item, quantity, updateQuantity } = this.props;

    return RegistryLoader(
      { favorite, item, quantity, updateQuantity },
      'components.FavoriteItem',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(FavoriteItem);
