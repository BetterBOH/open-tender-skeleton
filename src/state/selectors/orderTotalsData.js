import { createSelector } from 'reselect';
import currency from 'currency.js';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.order.validatedCart.data'),
  state => get(state, 'openTender.session.order.validated.data'),
  (validatedCartData, validatedOrderData) => {
    const tax = get(validatedCartData, 'tax', '0.00');
    const subtotal = get(validatedCartData, 'subtotal', '0.00');
    const discount = get(validatedOrderData, 'discount', '0.00');
    const subtotalWithTax = currency(subtotal)
      .add(tax)
      .toString();
    const total = currency(subtotalWithTax)
      .subtract(discount)
      .toString();

    return {
      subtotal: subtotal,
      tax: tax,
      subtotalWithTax: subtotalWithTax,
      discount: discount,
      total: total
    };
  }
);
