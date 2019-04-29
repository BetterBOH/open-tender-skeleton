const InputTypes = {
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  EMAIL: 'email',
  PHONE: 'phone',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirm_password',
  CREDIT_CARD_NUMBER: 'cc_number',
  CREDIT_CARD_EXPIRATION: 'cc_expiration',
  CREDIT_CARD_CVV: 'cc_cvv',
  CREDIT_CARD_ZIP_CODE: 'cc_zip'
};

const ErrorMessages = {
  INVALID_FIRST_NAME: 'You must provide a first name.',
  INVALID_LAST_NAME: 'You must provide a last name.',
  INVALID_EMAIL: 'You must provide a valid email address.',
  INVALID_PHONE_NUMBER: 'You must provide a valid phone number'
};

export { InputTypes, ErrorMessages };
