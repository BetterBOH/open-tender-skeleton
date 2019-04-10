import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';

const RecentOrders = React.memo(props =>
  RegistryLoader(props, 'components.RecentOrders', () =>
    import('./presentation.js')
  )
);

RecentOrders.propTypes = {
  orders: PropTypes.arrayOf(OrderModel.propTypes)
};

RecentOrders.defaultProps = {
  orders: []
};

export default RecentOrders;
