import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import OrderSummaryModel from 'constants/Models/OrderSummaryModel';
import LineItemModel from 'constants/Models/LineItemModel';

import withLocales from 'lib/withLocales';

const DashboardOrderSummary = React.memo(props =>
  RegistryLoader(props, 'components.DashboardOrderSummary', () =>
    import('./presentation.js')
  )
);

DashboardOrderSummary.propTypes = {
  orderSummaryData: OrderSummaryModel.propTypes,
  lineItemsData: PropTypes.arrayOf(LineItemModel.propTypes)
};

DashboardOrderSummary.defaultProps = {
  orderSummaryData: OrderSummaryModel.defaultProps,
  lineItemsData: []
};

export { DashboardOrderSummary };
export default withLocales(DashboardOrderSummary);
