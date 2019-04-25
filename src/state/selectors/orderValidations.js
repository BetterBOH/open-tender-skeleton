import { createSelector } from 'reselect';
import get from 'utils/get';
import isEmpty from 'lodash/isEmpty';

const orderValidations = createSelector(
  state => get(state, 'openTender.session.order.orderData'),
  state => get(state, 'openTender.session.order.validated.data', null),
  (orderData, validatedOrderData) => {
    if (isEmpty(orderData)) return null;

    if (validatedOrderData) {
      return get(validatedOrderData, 'validations', null);
    }

    return null;
  }
);

export default orderValidations;
