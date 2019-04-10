import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import withLocales from 'lib/withLocales';

const OrderSummaryItemRow = props => {
  return RegistryLoader(props, 'components.OrderSummaryItemRow', () =>
    import('./presentation.js')
  );
};

OrderSummaryItemRow.propTypes = {
  item: PropTypes.object // TODO: add model
};

OrderSummaryItemRow.defaultProps = {
  item: {} // TODO: add model
};

export default withLocales(OrderSummaryItemRow);
