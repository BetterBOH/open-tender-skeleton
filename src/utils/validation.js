/**
 * Regex
 */
const emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const phoneRegex = RegExp(
  '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
);
const passwordRegex = RegExp(/.{8,}/);
const creditCardNumberRegex = RegExp(
  '^((4\\d{3})|(5[1-5]\\d{2})|(6011))-?\\d{4}-?\\d{4}-?\\d{4}|3[4,7]\\d{13}$'
);
const creditCardExpirationRegex = RegExp(
  '^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$'
);
const creditCardCVVRegex = RegExp('^[0-9]{3,4}$');
const creditCardZipCodeRegex = RegExp('^\\d{5}(?:[-\\s]\\d{4})?$');

/**
 * Validations for export
 */
const isValidName = name => !!name && typeof name === 'string' && name.length;

const isValidEmail = email =>
  !!email && typeof email === 'string' && emailRegex.test(email);

const isValidPhoneNumber = phone =>
  !!phone &&
  (typeof phone === 'string' || typeof phone === 'number') &&
  phoneRegex.test(phone);

const isValidPassword = password =>
  !!password &&
  (typeof password === 'string' || typeof password === 'number') &&
  passwordRegex.test(password);

const isValidCreditCardNumber = cardNumber =>
  !!cardNumber && cardNumber.length && creditCardNumberRegex.test(cardNumber);

const isValidCreditCardExpiration = expiration =>
  !!expiration &&
  expiration.length &&
  creditCardExpirationRegex.test(expiration);

const isValidCreditCardCVV = cvv =>
  !!cvv && cvv.length && creditCardCVVRegex.test(cvv);

const isValidCreditCardZipCode = zip =>
  !!zip && zip.length && creditCardZipCodeRegex.test(zip);

export {
  isValidName,
  isValidEmail,
  isValidPhoneNumber,
  isValidPassword,
  isValidCreditCardNumber,
  isValidCreditCardExpiration,
  isValidCreditCardCVV,
  isValidCreditCardZipCode,
  creditCardExpirationRegex
};
