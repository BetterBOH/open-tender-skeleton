/**
 * Regex
 */
const emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const phoneRegex = RegExp(
  '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
);

/**
 * Validations for export
 */
const isValidEmail = email =>
  !!email && typeof email === 'string' && emailRegex.test(email);

const isValidPhoneNumber = phone =>
  !!phone &&
  (typeof phone === 'string' || typeof phone === 'number') &&
  phoneRegex.test(phone);

export { isValidEmail, isValidPhoneNumber };
