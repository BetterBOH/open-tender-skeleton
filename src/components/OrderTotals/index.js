import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const OrderTotals = props => {
  return RegistryLoader(props, 'components.OrderTotals', () =>
    import('./presentation.js')
  );
};

OrderTotals.propTypes = {
  data: PropTypes.objectOf(PropTypes.number)
};

OrderTotals.defaultProps = {
  data: {}
};

export default withLocales(OrderTotals);
