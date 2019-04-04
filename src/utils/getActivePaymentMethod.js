import get from 'utils/get';

export default (paymentMethodId, paymentMethods = []) => {
  if (!paymentMethodId || (!paymentMethods || !paymentMethods.length)) {
    return null;
  }

  return paymentMethods.find(
    paymentMethod => get(paymentMethod, 'customer_card_id') === paymentMethodId
  );
};
