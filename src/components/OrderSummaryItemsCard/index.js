import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import withLocales from 'lib/withLocales';

const OrderSummaryItemsCard = props => {
  return RegistryLoader(props, 'components.OrderSummaryItemsCard', () =>
    import('./presentation.js')
  );
};

OrderSummaryItemsCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object) //TODO: Use model
};

OrderSummaryItemsCard.defaultProps = {
  items: [] //TODO: Use model
};

export default withLocales(OrderSummaryItemsCard);
