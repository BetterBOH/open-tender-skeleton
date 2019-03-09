import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';
import withLocales from 'lib/withLocales';

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

export default withLocales(PastOrderCard);
