import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import MenuItemModel from 'constants/Models/MenuItemModel';

class MenuSectionItemsLarge extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(MenuItemModel.propTypes)
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items, localesContext } = this.props;
    return RegistryLoader(
      { items, localesContext },
      'components.MenuSectionItemsLarge',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(MenuSectionItemsLarge);
