import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';

class MenuItemBuilder extends Component {
  static propTypes = {
    lineItem: LineItemModel.propTypes
  };

  static defaultProps = {
    lineItem: null
  };

  render() {
    const { lineItem } = this.props;

    return RegistryLoader({ lineItem }, 'components.MenuItemBuilder', () =>
      import('./presentation.js')
    );
  }
}

export default withLineItemActions(MenuItemBuilder);
