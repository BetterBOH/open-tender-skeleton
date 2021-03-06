import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentCategory } from 'state/actions/ui/menuNavigationActions';

import MenuAppearances from 'constants/MenuAppearances';
import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuCategory extends PureComponent {
  static propTypes = {
    menuCategory: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      appearance: PropTypes.string,
      items: PropTypes.arrayOf(MenuItemModel.propTypes)
    }),
    menuItemQuantities: PropTypes.objectOf(PropTypes.number),
    menuItemFavorites: PropTypes.arrayOf(PropTypes.number),
    actions: PropTypes.shape({
      setCurrentCategory: PropTypes.func
    })
  };

  static defaultProps = {
    menuCategory: {
      name: '',
      description: '',
      appearance: MenuAppearances.SMALL,
      items: []
    },
    menuItemQuantities: null,
    menuItemFavorites: [],
    actions: {
      setCurrentCategory: f => f
    }
  };

  render() {
    const {
      menuCategory,
      menuItemQuantities,
      menuItemFavorites,
      actions
    } = this.props;

    return RegistryLoader(
      { menuCategory, menuItemQuantities, menuItemFavorites, actions },
      'components.MenuCategory',
      () => import('./presentation.js')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setCurrentCategory
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(MenuCategory);
