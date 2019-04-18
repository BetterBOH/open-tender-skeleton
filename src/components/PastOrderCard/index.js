import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';

const PastOrderCard = React.memo(props =>
  RegistryLoader(props, 'components.PastOrderCard', () =>
    import('./presentation.js')
  )
);

PastOrderCard.propTypes = {
  order: OrderModel.propTypes,
  onClick: PropTypes.func
};

PastOrderCard.defaultProps = {
  order: OrderModel.defaultProps,
  onClick: f => f
};

export default PastOrderCard;
