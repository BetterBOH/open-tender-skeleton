import get from 'utils/get';

export default (invalidItems, cart) => {
  const invalidItemIds = invalidItems.map(invalidItem =>
    get(invalidItem, 'source.pointer')
  );

  return get(cart, 'lineItems', []).filter(lineItem =>
    invalidItemIds.includes(get(lineItem, 'product.id'))
  );
};
