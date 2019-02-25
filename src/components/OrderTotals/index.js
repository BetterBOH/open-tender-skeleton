import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const OrderTotals = React.memo(props =>
  RegistryLoader(props, 'components.OrderTotals', () =>
    import('./presentation.js')
  )
);

OrderTotals.propTypes = {
  data: PropTypes.objectOf(PropTypes.number)
};

OrderTotals.defaultProps = {
  data: {}
};

export { OrderTotals };
export default withLocales(OrderTotals);
