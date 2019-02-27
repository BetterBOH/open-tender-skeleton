import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';
import withLocales from 'lib/withLocales';

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

export { RecentOrders };
export default withLocales(RecentOrders);
