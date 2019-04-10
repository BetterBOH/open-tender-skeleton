import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import MenuAppearances from 'constants/MenuAppearances';
import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuCategory extends PureComponent {
  static propTypes = {
    menuCategory: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      appearance: PropTypes.string,
      items: PropTypes.arrayOf(MenuItemModel.propTypes)
    })
  };

  static defaultProps = {
    menuCategory: {
      name: '',
      description: '',
      appearance: MenuAppearances.SMALL,
      items: []
    }
  };

  render() {
    const { menuCategory } = this.props;

    return RegistryLoader({ menuCategory }, 'components.MenuCategory', () =>
      import('./presentation.js')
    );
  }
}

export default MenuCategory;
