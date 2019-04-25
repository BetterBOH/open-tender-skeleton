import { ErrorMessages, ErrorObjectKeys, InputTypes } from 'constants/Forms';
import get from 'utils/get';
import {
  isValidName,
  isValidEmail,
  isValidPhoneNumber,
  isValidPassword,
  isValidCreditCardNumber,
  isValidCreditCardExpiration,
  isValidCreditCardCVV,
  isValidCreditCardZipCode
} from 'utils/validation';

const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = InputTypes;

const { ERROR_MESSAGE, SHOW_ERROR_MESSAGE } = ErrorObjectKeys;

const {
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INVALID_EMAIL,
  INVALID_PHONE_NUMBER,
  INVALID_PASSWORD,
  INVALID_PASSWORD_CONFIRMATION,
  INVALID_CREDIT_CARD_NUMBER,
  INVALID_CREDIT_CARD_EXPIRATION,
  INVALID_CREDIT_CARD_CVV,
  INVALID_CREDIT_CARD_ZIP_CODE,
  INVALID_MESSAGE
} = ErrorMessages;

/*
  * Validate Input is useful for validating
  * and setting any validation errors
  * related to the users input

  * use with onBlur event
* */

const validateInput = (
  input = '',
  values = {},
  errors = {},
  resolver = f => f
) => {
  switch (input) {
    case FIRST_NAME:
      if (values[FIRST_NAME] && values[FIRST_NAME].length) {
        if (!isValidName(values[FIRST_NAME])) {
          resolver({
            values: {
              ...values
            },
            errors: {
              ...errors,
              [FIRST_NAME]: {
                [ERROR_MESSAGE]: INVALID_FIRST_NAME,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [FIRST_NAME]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case LAST_NAME:
      if (values[LAST_NAME] && values[LAST_NAME].length) {
        if (!isValidName(values[LAST_NAME])) {
          resolver({
            values: {
              ...values
            },
            errors: {
              ...errors,
              [LAST_NAME]: {
                [ERROR_MESSAGE]: INVALID_LAST_NAME,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [LAST_NAME]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case EMAIL:
      if (values[EMAIL] && values[EMAIL].length) {
        if (!isValidEmail(values[EMAIL])) {
          resolver({
            values: {
              ...values
            },
            errors: {
              ...errors,
              [EMAIL]: {
                [ERROR_MESSAGE]: INVALID_EMAIL,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [EMAIL]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case PHONE:
      if (values[PHONE] && values[PHONE].length) {
        if (!isValidPhoneNumber(values[PHONE])) {
          resolver({
            values: {
              ...values
            },
            errors: {
              ...errors,
              [PHONE]: {
                [ERROR_MESSAGE]: INVALID_PHONE_NUMBER,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [PHONE]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case PASSWORD:
      if (values[PASSWORD] && values[PASSWORD].length) {
        if (!isValidPassword(values[PASSWORD])) {
          resolver({
            values: {
              ...values
            },
            errors: {
              ...errors,
              [PASSWORD]: {
                [ERROR_MESSAGE]: INVALID_PASSWORD,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [PASSWORD]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case CONFIRM_PASSWORD:
      if (values[CONFIRM_PASSWORD] && values[CONFIRM_PASSWORD].length) {
        if (
          !isValidPasswordConfirmation(
            values[PASSWORD],
            values[CONFIRM_PASSWORD]
          )
        ) {
          resolver({
            values: { ...values },
            errors: {
              ...errors,
              [CONFIRM_PASSWORD]: {
                [ERROR_MESSAGE]: INVALID_PASSWORD_CONFIRMATION,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CONFIRM_PASSWORD]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case CREDIT_CARD_NUMBER:
      if (values[CREDIT_CARD_NUMBER] && values[CREDIT_CARD_NUMBER].length) {
        if (!isValidCreditCardNumber(values[CREDIT_CARD_NUMBER])) {
          resolver({
            values: { ...values },
            errors: {
              ...errors,
              [CREDIT_CARD_NUMBER]: {
                [ERROR_MESSAGE]: INVALID_CREDIT_CARD_NUMBER,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_NUMBER]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case CREDIT_CARD_EXPIRATION:
      if (
        values[CREDIT_CARD_EXPIRATION] &&
        values[CREDIT_CARD_EXPIRATION].length
      ) {
        if (!isValidCreditCardExpiration(values[CREDIT_CARD_EXPIRATION])) {
          resolver({
            values: { ...values },
            errors: {
              ...errors,
              [CREDIT_CARD_EXPIRATION]: {
                [ERROR_MESSAGE]: INVALID_CREDIT_CARD_EXPIRATION,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_EXPIRATION]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case CREDIT_CARD_CVV:
      if (values[CREDIT_CARD_CVV] && values[CREDIT_CARD_CVV].length) {
        if (!isValidCreditCardCVV(values[CREDIT_CARD_CVV])) {
          resolver({
            values: { ...values },
            errors: {
              ...errors,
              [CREDIT_CARD_CVV]: {
                [ERROR_MESSAGE]: INVALID_CREDIT_CARD_CVV,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_CVV]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    case CREDIT_CARD_ZIP_CODE:
      if (values[CREDIT_CARD_ZIP_CODE] && values[CREDIT_CARD_ZIP_CODE].length) {
        if (!isValidCreditCardZipCode(values[CREDIT_CARD_ZIP_CODE])) {
          resolver({
            values: { ...values },
            errors: {
              ...errors,
              [CREDIT_CARD_ZIP_CODE]: {
                [ERROR_MESSAGE]: INVALID_CREDIT_CARD_ZIP_CODE,
                [SHOW_ERROR_MESSAGE]: false
              }
            }
          });
          return false;
        }
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_ZIP_CODE]: {
            [ERROR_MESSAGE]: '',
            [SHOW_ERROR_MESSAGE]: false
          }
        }
      });
      return true;

    default:
      return false;
  }
};

const handleValidationErrorMessage = (input, values, errors, resolver) => {
  if (errors[input][ERROR_MESSAGE] && errors[input][ERROR_MESSAGE].length) {
    resolver({
      values: {
        ...values
      },
      errors: {
        ...errors,
        [input]: {
          ...errors[input],
          [SHOW_ERROR_MESSAGE]: true
        }
      }
    });
  }

  return false;
};

const handleServerError = (serverErrors, values, errors, resolver) => {
  const errorSource = serverErrors.find(error => !!error.source);

  if (errorSource) {
    resolver({
      values: {
        ...values
      },
      errors: {
        ...errors,
        [get(errorSource, 'source.pointer')]: {
          [ERROR_MESSAGE]: get(errorSource, 'title', ''),
          [SHOW_ERROR_MESSAGE]: true
        }
      }
    });
  }
};

/*
 * Validate Form is useful for validating
 * the form in its entirety
 * and determine whether it is ready
 * and valid for submission
 * */

const validateForm = (values = {}, errors = {}) => {
  const inputsAreValid = Object.keys(values).every(
    value => !!values[value] && values[value].length
  );

  const hasErrors = Object.keys(errors).some(
    error =>
      !!errors[error][ERROR_MESSAGE] && errors[error][ERROR_MESSAGE].length
  );

  return inputsAreValid && !hasErrors;
};

const sanitizeCreditCardExpiration = expiration => expiration.replace('/', '');

export {
  handleServerError,
  sanitizeCreditCardExpiration,
  validateInput,
  validateForm,
  handleValidationErrorMessage
};
