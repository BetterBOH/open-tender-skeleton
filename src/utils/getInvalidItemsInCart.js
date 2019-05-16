import get from 'utils/get';

export default (invalidItemIds, cart) => {
  return get(cart, 'lineItems', []).filter(lineItem =>
    invalidItemIds.includes(get(lineItem, 'product.id'))
  );
};
