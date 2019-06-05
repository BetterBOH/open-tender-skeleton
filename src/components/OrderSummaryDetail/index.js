import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const OrderSummaryDetail = React.memo(({ value, label, icon, imageUrl }) =>
  RegistryLoader(
    { value, label, icon, imageUrl },
    'components.OrderSummaryDetail',
    () => import('./presentation.js')
  )
);

OrderSummaryDetail.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  imageUrl: PropTypes.string
};

OrderSummaryDetail.defaultProps = {
  value: null,
  label: '',
  icon: '',
  imageUrl: ''
};

export default OrderSummaryDetail;
