import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import MenuItemModel from 'constants/Models/MenuItemModel';

import withLocales from 'lib/withLocales';

class MenuItemSizeSelection extends PureComponent {
  static propTypes = {
    // TODO: create selector of an array of similar items available in different sizes
    // i.e. Fountain Soda, Small and Fountain Soda, Regular
    items: PropTypes.arrayOf(MenuItemModel.propTypes)
  };

  static defaultProps = {
    items: []
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
        items: this.props.items,
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
