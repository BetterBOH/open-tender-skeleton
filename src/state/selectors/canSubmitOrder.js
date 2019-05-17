import { createSelector } from 'reselect';
import { Status } from 'brandibble-redux';

import get from 'utils/get';
import isEmpty from 'lodash/isEmpty';

import { userIsAuthenticated } from 'state/selectors';

const guestCustomerCanOrder = createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => get(state, 'openTender.session.order.validated.data', null),
  state => get(state, 'openTender.status.createOrder', Status.IDLE),
  state => get(state, 'openTender.status.submitOrder', Status.IDLE),
  (orderData, validatedOrderData, createOrderStatus, submitOrderStatus) => {
    // If a new order is being created OR an order is being submitted, return false
    if (
      createOrderStatus === Status.PENDING ||
      submitOrderStatus === Status.PENDING
    ) {
      return false;
    }

    // If the customer hasn't added a credit card, return false
    if (isEmpty(get(orderData, 'credit_card', {}))) {
      return false;
    }

    if (isEmpty(orderData)) return false;

    // If the customer is missing required attributes, return false
    const firstName = get(orderData, 'customer.first_name', '');
    const lastName = get(orderData, 'customer.last_name', '');
    const email = get(orderData, 'customer.email', '');
    const phone = get(orderData, 'customer.phone', '');

    if (![firstName, lastName, email, phone].every(Boolean)) {
      return false;
    }

    if (validatedOrderData) {
      return get(validatedOrderData, 'validations.length') === 0;
    }

    return true;
  }
);

const authenticatedCustomerCanOrder = createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => get(state, 'openTender.session.order.validated.data', null),
  state => get(state, 'openTender.status.createOrder', Status.IDLE),
  state => get(state, 'openTender.status.submitOrder', Status.IDLE),
  (orderData, validatedOrderData, createOrderStatus, submitOrderStatus) => {
    // If a new order is being created OR an order is being submitted, return false
    if (
      createOrderStatus === Status.PENDING ||
      submitOrderStatus === Status.PENDING
    ) {
      return false;
    }

    // If the customer hasn't added a credit card, return false
    if (isEmpty(get(orderData, 'credit_card', {}))) {
      return false;
    }

    if (isEmpty(orderData)) return false;

    if (validatedOrderData) {
      return get(validatedOrderData, 'validations.length') === 0;
    }

    return true;
  }
);

const canSubmitOrder = state =>
  userIsAuthenticated(state)
    ? authenticatedCustomerCanOrder(state)
    : guestCustomerCanOrder(state);

export default canSubmitOrder;
