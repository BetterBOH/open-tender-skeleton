import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';

const PastOrderCard = React.memo(props =>
  RegistryLoader(props, 'components.PastOrderCard', () =>
    import('./presentation.js')
  )
);

PastOrderCard.propTypes = {
  order: OrderModel.propTypes
};

PastOrderCard.defaultProps = {
  order: OrderModel.defaultProps
};

export default PastOrderCard;
