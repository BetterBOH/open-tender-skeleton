import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

const OrderSummaryNode = React.memo(props =>
  RegistryLoader(props, 'components.OrderSummaryNode', () =>
    import('./presentation.js')
  )
);

OrderSummaryNode.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  imageUrl: PropTypes.string
};

OrderSummaryNode.defaultProps = {
  value: null,
  label: '',
  icon: '',
  imageUrl: ''
};

export default OrderSummaryNode;
