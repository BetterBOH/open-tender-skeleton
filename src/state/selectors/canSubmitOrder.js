import { createSelector } from 'reselect';
import { IDLE, PENDING } from 'constants/Status';
import get from 'utils/get';
import isEmpty from 'lodash/isEmpty';

import { userIsAuthenticated } from 'state/selectors';

const guestCustomerCanOrder = createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => get(state, 'openTender.session.order.validated.data', null),
  state => get(state, 'openTender.status.createOrder', IDLE),
  state => get(state, 'openTender.status.submitOrder', IDLE),
  (orderData, validatedOrderData, createOrderStatus, submitOrderStatus) => {
    // If a new order is being created OR an order is being submitted, return false
    if (createOrderStatus === PENDING || submitOrderStatus === PENDING) {
      return false;
    }

    if (validatedOrderData) {
      return get(validatedOrderData, 'validations.length') === 0;
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

    // If the customer hasn't added a credit card, return false
    if (isEmpty(get(orderData, 'credit_card', {}))) {
      return false;
    }

    return true;
  }
);

const authenticatedCustomerCanOrder = createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => get(state, 'openTender.session.order.validated.data', null),
  state => get(state, 'openTender.status.createOrder', IDLE),
  state => get(state, 'openTender.status.submitOrder', IDLE),
  (orderData, validatedOrderData, createOrderStatus, submitOrderStatus) => {
    // If a new order is being created OR an order is being submitted, return false
    if (createOrderStatus === PENDING || submitOrderStatus === PENDING) {
      return false;
    }

    if (validatedOrderData) {
      return get(validatedOrderData, 'validations.length') === 0;
    }

    if (isEmpty(orderData)) return false;

    // If the customer hasn't added a credit card, return false
    if (isEmpty(get(orderData, 'credit_card', {}))) {
      return false;
    }

    return true;
  }
);

const canSubmitOrder = state =>
  userIsAuthenticated(state)
    ? authenticatedCustomerCanOrder(state)
    : guestCustomerCanOrder(state);

export default canSubmitOrder;
