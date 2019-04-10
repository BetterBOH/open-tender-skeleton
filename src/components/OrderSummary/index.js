import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import OrderSummaryModel from 'constants/Models/OrderSummaryModel';

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

export default OrderSummary;
