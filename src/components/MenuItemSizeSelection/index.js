import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import MenuItemModel from 'constants/Models/MenuItemModel';

import withLocales from 'lib/withLocales';

class MenuItemSizeSelection extends PureComponent {
  static propTypes = {
    // TODO: create selector of an array of similar items available in different sizes
    // i.e. Fountain Soda, Small and Fountain Soda, Regular
    selected: MenuItemModel.propTypes
  };

  static defaultProps = {
    items: [],
    selected: null
  };

  state = {
    selected: this.props.selected
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
