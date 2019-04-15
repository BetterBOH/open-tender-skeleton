import get from 'utils/get';

export default (invalidItems, cart) =>
  invalidItems.reduce((invalidItemsFromCart, invalidItem) => {
    get(cart, 'lineItems', [])
      .filter(
        lineItem =>
          get(lineItem, 'product.id') === get(invalidItem, 'source.pointer')
      )
      .forEach(lineItem => invalidItemsFromCart.push(lineItem));
    return invalidItemsFromCart;
  }, []);
