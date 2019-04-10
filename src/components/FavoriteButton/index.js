import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createFavorite, deleteFavorite } from 'brandibble-redux';

import MenuItemModel from 'constants/Models/MenuItemModel';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';

class FavoriteButton extends PureComponent {
  static propTypes = {
    itemIsFavorited: PropTypes.bool,
    menuItemId: PropTypes.number,
    item: MenuItemModel.propTypes,
    favoriteId: PropTypes.number
  };

  static defaultProps = {
    itemIsFavorited: false,
    menuItemId: null,
    item: MenuItemModel.defaultProps,
    favoriteId: null
  };

  addFavorite = () => {
    const createFavorite = get(this, 'props.actions.createFavorite');
    const openTenderRef = get(this, 'props.openTenderRef');
    const item = get(this, 'props.item');

    if (!item) return null;

    return createFavorite(openTenderRef, {
      product: this.props.item,
      name: item.name || ''
    });
  };

  removeFavorite = () => {
    const deleteFavorite = get(this, 'props.actions.deleteFavorite');
    const openTenderRef = get(this, 'props.openTenderRef');
    const favoriteId = get(this, 'props.favoriteId');

    if (!favoriteId) return null;

    return deleteFavorite(openTenderRef, favoriteId);
  };

  render() {
    const { itemIsFavorited } = this.props;

    return RegistryLoader(
      {
        itemIsFavorited,
        removeFavorite: this.removeFavorite,
        addFavorite: this.addFavorite
      },
      'components.FavoriteButton',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createFavorite,
      deleteFavorite
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
