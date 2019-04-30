import {
  visa,
  mastercard,
  americanexpress,
  discover,
  creditCard
} from 'assets';

const PaymentMethods = {
  'Credit Card': {
    name: 'Credit Card',
    image: creditCard
  },
  Visa: {
    name: 'Visa',
    image: visa
  },
  Mastercard: {
    name: 'Mastercard',
    image: mastercard
  },
  'American Express': {
    name: 'American Express',
    image: americanexpress
  },
  Discover: {
    name: 'Discover',
    image: discover
  }
};

export const Stages = {
  SELECT_EXISTING_PAYMENT_METHOD: 'SELECT_EXISTING_PAYMENT_METHOD',
  SELECT_NEW_PAYMENT_METHOD: 'SELECT_NEW_PAYMENT_METHOD',
  CREATE_PAYMENT_METHOD: 'CREATE_PAYMENT_METHOD'
};

export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';

export const SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER = 'EDIT_ORDER';
export const SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT = 'EDIT_ACCOUNT';

export default PaymentMethods;
