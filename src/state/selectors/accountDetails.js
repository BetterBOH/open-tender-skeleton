import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.user.attributes', {}),
  state => get(state, 'openTender.session.addresses.addressesById', {}),
  state => get(state, 'openTender.session.payments.paymentsById', {}),
  (openTenderUser, addressesById, paymentsById) => {
    const accountItemsMapToArray = items =>
      Object.keys(items).map(itemID => items[itemID]);

    const addresses = accountItemsMapToArray(addressesById);
    const defaultAddress = addresses.find(address => address.is_default) || {};

    const payments = accountItemsMapToArray(paymentsById);
    const defaultPayment = payments.find(payment => payment.is_default) || {};

    return {
      fullName: `${get(openTenderUser, 'first_name', '')} ${get(
        openTenderUser,
        'last_name',
        ''
      )}`,
      email: get(openTenderUser, 'email', ''),
      addresses,
      defaultAddress: defaultAddress,
      payments,
      defaultPayment: defaultPayment
    };
  }
);
