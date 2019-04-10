import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';

const PastOrderDetails = React.memo(props =>
  RegistryLoader(props, 'components.PastOrderDetails', () =>
    import('./presentation.js')
  )
);

PastOrderDetails.propTypes = {
  order: OrderModel.propTypes
};

PastOrderDetails.defaultProps = {
  order: OrderModel.defaultProps
};

export default PastOrderDetails;
