import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import LineItemModel from 'constants/Models/LineItemModel';
import OrderModel from 'constants/Models/OrderModel';
import LocationModel from 'constants/Models/LocationModel';
import { withRouter } from 'react-router-dom';

const CurrentOrderSummary = React.memo(
  ({ lineItems, currentOrder, currentLocation, setSideCurtain, location }) =>
    RegistryLoader(
      { lineItems, currentOrder, currentLocation, setSideCurtain, location },
      'components.CurrentOrderSummary',
      () => import('./presentation.js')
    )
);

CurrentOrderSummary.propTypes = {
  lineItems: PropTypes.arrayOf(LineItemModel.propTypes),
  currentOrder: OrderModel.propTypes,
  currentLocation: LocationModel.propTypes,
  setSideCurtain: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

CurrentOrderSummary.defaultProps = {
  lineItems: [],
  currentOrder: OrderModel.defaultProps,
  currentLocation: LocationModel.defaultProps,
  setSideCurtain: f => f,
  location: null
};

export default withRouter(CurrentOrderSummary);
