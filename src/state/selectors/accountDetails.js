import { createSelector } from 'reselect';
import get from 'utils/get';

const accountItemsMapToArray = items => {
  return Object.keys(items).map(itemID => items[itemID]);
};

export default createSelector(
  state => get(state, 'openTender.user.attributes', {}),
  state =>
    accountItemsMapToArray(
      get(state, 'openTender.session.addresses.addressesById', {})
    ),
  state =>
    accountItemsMapToArray(
      get(state, 'openTender.session.payments.paymentsById', {})
    ),
  (openTenderUser, addresses, payments) => {
    const defaultAddress = addresses.find(address => address.is_default);
    const defaultPayment = payments.find(payment => payment.is_default) || {};
    return {
      fullName: `${get(openTenderUser, 'first_name', '')} ${get(
        openTenderUser,
        'last_name',
        ''
      )}`,
      email: get(openTenderUser, 'email', ''),
      defaultAddress: defaultAddress || {},
      defaultPayment: defaultPayment,
      addresses,
      payments
    };
  }
);
