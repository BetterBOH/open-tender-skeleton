import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import CompletedOrderItemModel from 'constants/Models/CompletedOrderItemModel';

import withLocales from 'lib/withLocales';

const OrderSummaryItemsCard = props => {
  return RegistryLoader(props, 'components.OrderSummaryItemsCard', () =>
    import('./presentation.js')
  );
};

OrderSummaryItemsCard.propTypes = {
  items: PropTypes.arrayOf(CompletedOrderItemModel.propTypes)
};

OrderSummaryItemsCard.defaultProps = {
  items: []
};

export default withLocales(OrderSummaryItemsCard);
