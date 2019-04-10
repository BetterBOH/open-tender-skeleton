import RegistryLoader from 'lib/RegistryLoader';
import CompletedOrderItem from 'constants/Models/CompletedOrderItem';

import withLocales from 'lib/withLocales';

const OrderSummaryItemRow = props => {
  return RegistryLoader(props, 'components.OrderSummaryItemRow', () =>
    import('./presentation.js')
  );
};

OrderSummaryItemRow.propTypes = {
  item: CompletedOrderItem.propTypes
};

OrderSummaryItemRow.defaultProps = {
  item: CompletedOrderItem.defaultProps
};

export default withLocales(OrderSummaryItemRow);
