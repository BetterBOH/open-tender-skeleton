import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';

const PastOrdersIndex = React.memo(props =>
  RegistryLoader(props, 'components.PastOrdersIndex', () =>
    import('./presentation.js')
  )
);

PastOrdersIndex.propTypes = {
  orders: PropTypes.arrayOf(OrderModel.propTypes)
};

PastOrdersIndex.defaultProps = {
  orders: []
};

export { PastOrdersIndex };
export default PastOrdersIndex;
