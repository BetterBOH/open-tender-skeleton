import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createFavorite, deleteFavorite } from 'brandibble-redux';

import LineItemModel from 'constants/Models/LineItemModel';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';

class FavoriteIcon extends PureComponent {
  static propTypes = {
    itemIsFavorited: PropTypes.bool,
    menuItemId: PropTypes.number,
    item: LineItemModel.propTypes,
    favoriteId: PropTypes.number
  };

  static defaultProps = {
    itemIsFavorited: false,
    menuItemId: null,
    item: LineItemModel.defaultProps,
    favoriteId: null
  };

  addFavorite = () => {
    const createFavorite = get(this, 'props.actions.createFavorite');
    const openTenderRef = get(this, 'props.openTenderRef');
    const item = get(this, 'props.item');
    if (createFavorite && openTenderRef && item) {
      createFavorite(openTenderRef, {
        product: this.props.item,
        name: item.name || ''
      });
    }
  };

  removeFavorite = () => {
    const deleteFavorite = get(this, 'props.actions.deleteFavorite');
    const openTenderRef = get(this, 'props.openTenderRef');
    const favoriteId = get(this, 'props.favoriteId');
    if (deleteFavorite && openTenderRef && favoriteId) {
      deleteFavorite(openTenderRef, favoriteId);
    }
  };

  render() {
    const { itemIsFavorited } = this.props;
    const onClick = itemIsFavorited ? this.removeFavorite : this.addFavorite;

    return RegistryLoader(
      { itemIsFavorited, onClick },
      'components.FavoriteIcon',
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
)(withBrand(FavoriteIcon));
