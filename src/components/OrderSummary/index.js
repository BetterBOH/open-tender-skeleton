import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import OrderSummaryModel from 'constants/Models/OrderSummaryModel';

import withLocales from 'lib/withLocales';

const OrderSummary = React.memo(props =>
  RegistryLoader(props, 'components.OrderSummary', () =>
    import('./presentation.js')
  )
);

OrderSummary.propTypes = {
  orderSummaryData: OrderSummaryModel.propTypes
};

OrderSummary.defaultProps = {
  orderSummaryData: OrderSummaryModel.defaultProps
};

export default withLocales(OrderSummary);
