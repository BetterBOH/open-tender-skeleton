import React from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

const OrderSummaryHeader = React.memo(
  ({ orderId, orderDate, orderTotal, deliveryTrackingUrl }) =>
    RegistryLoader(
      { orderId, orderDate, orderTotal, deliveryTrackingUrl },
      'components.OrderSummaryHeader',
      () => import('./presentation.js')
    )
);

OrderSummaryHeader.propTypes = {
  orderId: PropTypes.number,
  orderDate: PropTypes.string,
  orderTotal: PropTypes.string,
  deliveryTrackingUrl: PropTypes.string
};

OrderSummaryHeader.defaultProps = {
  orderId: null,
  orderDate: '',
  orderTotal: '',
  deliveryTrackingUrl: ''
};

export default OrderSummaryHeader;
