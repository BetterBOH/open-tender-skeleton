import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';

const OrderSubtotal = React.memo(props =>
  RegistryLoader(props, 'components.OrderSubtotal', () =>
    import('./presentation.js')
  )
);

OrderSubtotal.propTypes = {
  subtotal: PropTypes.number
};

OrderSubtotal.defaultProps = {
  subtotal: 0
};

export default OrderSubtotal;
