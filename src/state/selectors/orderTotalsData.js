import { createSelector } from 'reselect';
import currency from 'currency.js';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.session.order.validatedCart.data'),
  state => get(state, 'openTender.session.order.validated.data'),
  (validatedCartData, validatedOrderData) => {
    const tax = get(validatedCartData, 'tax', 0);
    const subtotal = get(validatedCartData, 'subtotal', 0);
    const discount = get(validatedOrderData, 'discount', 0);
    const subtotalWithTax = currency(subtotal).add(tax);
    const total = currency(subtotalWithTax).subtract(discount);

    return {
      subtotal: subtotal.toString(),
      tax: tax.toString(),
      subtotalWithTax: subtotalWithTax.toString(),
      discount: discount.toString(),
      total: total.toString()
    };
  }
);
