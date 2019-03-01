import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuSectionItemsMedium extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(MenuItemModel.propTypes)
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items } = this.props;

    return RegistryLoader({ items }, 'components.MenuSectionItemsMedium', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionItemsMedium;