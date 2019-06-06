import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.user.attributes'),
  state => get(state, 'openTender.session.addresses.addressesById'),
  state => get(state, 'openTender.session.payments.paymentsById'),
  (customerAttributes, addressesById, paymentsById) => {
    if (!customerAttributes) return null;

    const addresses = addressesById ? Object.values(addressesById) : {};
    const defaultAddress = addresses.find(address => address.is_default);

    const payments = paymentsById ? Object.values(paymentsById) : {};
    const defaultPayment = payments.find(payment => payment.is_default);

    return {
      id: get(customerAttributes, 'customer_id'),
      firstName: get(customerAttributes, 'first_name'),
      lastName: get(customerAttributes, 'last_name'),
      email: get(customerAttributes, 'email'),
      phone: get(customerAttributes, 'phone'),
      allergens: get(customerAttributes, 'allergens'),
      addresses,
      defaultAddress,
      payments,
      defaultPayment
    };
  }
);
