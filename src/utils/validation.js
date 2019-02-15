/**
 * Regex
 */
const emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

/**
 * Validations for export
 */
const isValidEmail = email =>
  !!email && typeof email === 'string' && emailRegex.test(email);

export { isValidEmail };
