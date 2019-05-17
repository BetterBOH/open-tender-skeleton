import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import CompletedOrderItemModel from 'constants/Models/CompletedOrderItemModel';

class OrderSummaryItemRow extends PureComponent {
  static propTypes = {
    item: CompletedOrderItemModel.propTypes
  };

  static defaultProps = {
    item: CompletedOrderItemModel.defaultProps
  };

  render() {
    const { item } = this.props;

    return RegistryLoader({ item }, 'components.OrderSummaryItemRow', () =>
      import('./presentation.js')
    );
  }
}

export default OrderSummaryItemRow;
