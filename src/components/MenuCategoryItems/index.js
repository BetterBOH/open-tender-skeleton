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
    allergenWarnings: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    menuCategory: {
      appearance: MenuAppearances.SMALL,
      items: []
    },
    allergenWarnings: []
  };

  render() {
    const { menuCategory } = this.props;

    return RegistryLoader(
      { menuCategory },
      'components.MenuCategoryItems',
      () => import('./presentation.js')
    );
  }
}

export default MenuCategoryItems;
