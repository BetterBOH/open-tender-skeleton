import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';
import withModalActions from 'lib/withModalActions';

class LineItemEditor extends Component {
  static propTypes = {
    lineItem: LineItemModel.propTypes
  };

  static defaultProps = {
    lineItem: null
  };

  render() {
    const { lineItem, actions } = this.props;

    return RegistryLoader(
      { lineItem, actions },
      'components.LineItemEditor',
      () => import('./presentation.js')
    );
  }
}

export default withModalActions(withLineItemActions(LineItemEditor));
