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

export default PaymentMethods;
