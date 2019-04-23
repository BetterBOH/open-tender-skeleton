import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.payments.paymentsById'),
  state => get(state, 'openTender.session.order.orderData'),
  (paymentsById, currentOrder) => {
    const currentCreditCard = get(currentOrder, 'credit_card.customer_card_id');

    if (!paymentsById || !currentCreditCard) return null;

    return get(paymentsById, currentCreditCard);
  }
);
