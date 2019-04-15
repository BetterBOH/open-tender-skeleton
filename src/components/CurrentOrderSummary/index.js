import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import OrderSummaryModel from 'constants/Models/OrderSummaryModel';
import LineItemModel from 'constants/Models/LineItemModel';
import { withRouter } from 'react-router-dom';

const CurrentOrderSummary = React.memo(props =>
  RegistryLoader(props, 'components.CurrentOrderSummary', () =>
    import('./presentation.js')
  )
);

CurrentOrderSummary.propTypes = {
  orderSummaryData: OrderSummaryModel.propTypes,
  lineItemsData: PropTypes.arrayOf(LineItemModel.propTypes)
};

CurrentOrderSummary.defaultProps = {
  orderSummaryData: OrderSummaryModel.defaultProps,
  lineItemsData: []
};

export default withRouter(CurrentOrderSummary);
