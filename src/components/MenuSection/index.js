import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import MenuAppearances from 'constants/MenuAppearances';
import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuSection extends PureComponent {
  static propTypes = {
    menuSection: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      appearance: PropTypes.string,
      items: PropTypes.arrayOf(MenuItemModel.propTypes)
    })
  };

  static defaultProps = {
    menuSection: {
      name: '',
      description: '',
      appearance: MenuAppearances.SMALL,
      items: []
    }
  };

  render() {
    const { menuSection, brandContext } = this.props;

    return RegistryLoader(
      { menuSection, brandContext },
      'components.MenuSection',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(MenuSection);
