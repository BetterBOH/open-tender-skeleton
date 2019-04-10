import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

const OrderSummaryHeader = React.memo(({ orderId, orderDate, orderTotal }) =>
  RegistryLoader(
    { orderId, orderDate, orderTotal },
    'components.OrderSummaryHeader',
    () => import('./presentation.js')
  )
);

OrderSummaryHeader.propTypes = {
  orderId: PropTypes.number,
  orderDate: PropTypes.string,
  orderTotal: PropTypes.string
};

OrderSummaryHeader.defaultProps = {
  orderId: null,
  orderDate: '',
  orderTotal: ''
};

export default OrderSummaryHeader;
