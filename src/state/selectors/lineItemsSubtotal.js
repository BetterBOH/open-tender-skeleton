import { createSelector } from 'reselect';
import currency from 'currency.js';
import calculateLineItemPrice from 'utils/calculateLineItemPrice';
import get from 'utils/get';

const BASE_PRICE = '0.00';
const OPTIONS = { formatWithSymbol: true };

export default createSelector(
  state => get(state, 'openTender.session.order.lineItemsData', []),
  lineItemsData => {
    if (!lineItemsData || !lineItemsData.length) {
      return currency(BASE_PRICE, OPTIONS).format();
    }

    const totalFromLineItemsData = lineItemsData.reduce((total, lineItem) => {
      const lineItemTotal = calculateLineItemPrice(lineItem);
      return currency(total).add(lineItemTotal);
    }, BASE_PRICE);

    return currency(totalFromLineItemsData, OPTIONS).format();
  }
);
