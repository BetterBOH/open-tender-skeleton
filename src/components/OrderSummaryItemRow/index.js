import RegistryLoader from 'lib/RegistryLoader';
import CompletedOrderItemModel from 'constants/Models/CompletedOrderItemModel';

import withLocales from 'lib/withLocales';

const OrderSummaryItemRow = props => {
  return RegistryLoader(props, 'components.OrderSummaryItemRow', () =>
    import('./presentation.js')
  );
};

OrderSummaryItemRow.propTypes = {
  item: CompletedOrderItemModel.propTypes
};

OrderSummaryItemRow.defaultProps = {
  item: CompletedOrderItemModel.defaultProps
};

export default withLocales(OrderSummaryItemRow);
