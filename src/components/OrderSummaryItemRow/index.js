import RegistryLoader from 'lib/RegistryLoader';
import CompletedOrderItemModel from 'constants/Models/CompletedOrderItemModel';
import PropTypes from 'prop-types';

const OrderSummaryItemRow = props => {
  return RegistryLoader(props, 'components.OrderSummaryItemRow', () =>
    import('./presentation.js')
  );
};

OrderSummaryItemRow.propTypes = {
  item: CompletedOrderItemModel.propTypes,
  fallbackImageSrc: PropTypes.string
};

OrderSummaryItemRow.defaultProps = {
  item: CompletedOrderItemModel.defaultProps,
  fallbackImageSrc: ''
};

export default OrderSummaryItemRow;
