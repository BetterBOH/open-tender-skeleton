import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import MenuItemModel from 'constants/Models/MenuItemModel';

import withLocales from 'lib/withLocales';

class MenuItemSizeSelection extends PureComponent {
  static propTypes = {
    menuItemSizeOptionGroup: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      option_items: PropTypes.arrayOf(MenuItemModel.propTypes)
    })
  };

  static defaultProps = {
    menuItemSizeOptionGroup: null
  };

  state = {
    selected: null
  };

  handleSelect = item => {
    this.setState({
      selected: item
    });
  };

  render() {
    return RegistryLoader(
      {
        menuItemSizeOptionGroup: this.props.menuItemSizeOptionGroup,
        selected: this.state.selected,
        handleSelect: this.handleSelect,
        localesContext: this.props.localesContext
      },
      'components.MenuItemSizeSelection',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(MenuItemSizeSelection);
