import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';

class LineItemRow extends PureComponent {
  static propTypes = {
    item: LineItemModel.propTypes,
    isConfigurable: PropTypes.bool
  };

  static defaultProps = {
    item: null,
    isConfigurable: true
  };

  render() {
    const { item, isConfigurable, updateQuantity } = this.props;

    return RegistryLoader(
      { item, isConfigurable, updateQuantity },
      'components.LineItemRow',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(LineItemRow);
