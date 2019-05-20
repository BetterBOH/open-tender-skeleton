import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import MenuItemModel from 'constants/Models/MenuItemModel';
import MenuAppearances from 'constants/MenuAppearances';

class MenuCategoryItems extends PureComponent {
  static propTypes = {
    menuCategory: PropTypes.shape({
      appearance: PropTypes.string,
      items: PropTypes.arrayOf(MenuItemModel.propTypes)
    }),
    allergenWarnings: PropTypes.arrayOf(PropTypes.string),
    menuItemQuantities: PropTypes.objectOf(PropTypes.number)
  };

  static defaultProps = {
    menuCategory: {
      appearance: MenuAppearances.SMALL,
      items: []
    },
    allergenWarnings: [],
    menuItemQuantities: null
  };

  render() {
    const { menuCategory, menuItemQuantities } = this.props;

    return RegistryLoader(
      { menuCategory, menuItemQuantities },
      'components.MenuCategoryItems',
      () => import('./presentation.js')
    );
  }
}

export default MenuCategoryItems;
