import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import OrderModel from 'constants/Models/OrderModel';
import LocationModel from 'constants/Models/LocationModel';
import CustomerModel from 'constants/Models/CustomerModel';

const OrderSummary = React.memo(
  ({ currentOrder, currentLocation, currentCustomer }) =>
    RegistryLoader(
      { currentOrder, currentLocation, currentCustomer },
      'components.OrderSummary',
      () => import('./presentation.js')
    )
);

OrderSummary.propTypes = {
  currentOrder: OrderModel.propTypes,
  currentLocation: LocationModel.propTypes,
  currentCustomer: CustomerModel.propTypes
};

OrderSummary.defaultProps = {
  currentOrder: OrderModel.defaultProps,
  currentLocation: LocationModel.defaultProps,
  currentCustomer: CustomerModel.defaultProps
};

export default OrderSummary;
