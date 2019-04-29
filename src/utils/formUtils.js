import { ErrorMessages, InputTypes } from 'constants/Forms';
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

const {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE,
  PASSWORD,
  CREDIT_CARD_NUMBER,
  CREDIT_CARD_EXPIRATION,
  CREDIT_CARD_CVV,
  CREDIT_CARD_ZIP_CODE
} = InputTypes;

const {
  INVALID_FIRST_NAME,
  INVALID_LAST_NAME,
  INVALID_EMAIL,
  INVALID_PHONE_NUMBER,
  INVALID_PASSWORD,
  INVALID_CREDIT_CARD_NUMBER,
  INVALID_CREDIT_CARD_EXPIRATION,
  INVALID_CREDIT_CARD_CVV,
  INVALID_CREDIT_CARD_ZIP_CODE
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
      if (!isValidName(values[FIRST_NAME])) {
        resolver({
          values: {
            ...values
          },
          errors: {
            ...errors,
            [FIRST_NAME]: [...errors[FIRST_NAME], INVALID_FIRST_NAME]
          }
        });
        return false;
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [FIRST_NAME]: []
        }
      });
      return true;

    case LAST_NAME:
      if (!isValidName(values[LAST_NAME])) {
        resolver({
          values: {
            ...values
          },
          errors: {
            ...errors,
            [LAST_NAME]: [...errors[LAST_NAME], INVALID_LAST_NAME]
          }
        });
        return false;
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [LAST_NAME]: []
        }
      });
      return true;

    case EMAIL:
      if (!isValidEmail(values[EMAIL])) {
        resolver({
          values: {
            ...values
          },
          errors: {
            ...errors,
            [EMAIL]: [...errors[EMAIL], INVALID_EMAIL]
          }
        });
        return false;
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [EMAIL]: []
        }
      });
      return true;

    case PHONE:
      if (!isValidPhoneNumber(values[PHONE])) {
        resolver({
          values: {
            ...values
          },
          errors: {
            ...errors,
            [PHONE]: [...errors[PHONE], INVALID_PHONE_NUMBER]
          }
        });
        return false;
      }

      resolver({
        values: {
          ...values
        },
        errors: {
          ...errors,
          [PHONE]: []
        }
      });
      return true;

    case PASSWORD:
      if (!isValidPassword(values[PASSWORD])) {
        resolver({
          values: {
            ...values
          },
          errors: {
            ...errors,
            [PASSWORD]: [...errors[PASSWORD], INVALID_PASSWORD]
          }
        });
        return false;
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [PASSWORD]: []
        }
      });
      return true;

    case CREDIT_CARD_NUMBER:
      if (!isValidCreditCardNumber(values[CREDIT_CARD_NUMBER])) {
        resolver({
          values: { ...values },
          errors: {
            ...errors,
            [CREDIT_CARD_NUMBER]: [
              ...errors[CREDIT_CARD_NUMBER],
              INVALID_CREDIT_CARD_NUMBER
            ]
          }
        });
        return false;
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_NUMBER]: []
        }
      });
      return true;

    case CREDIT_CARD_EXPIRATION:
      if (!isValidCreditCardExpiration(values[CREDIT_CARD_EXPIRATION])) {
        resolver({
          values: { ...values },
          errors: {
            ...errors,
            [CREDIT_CARD_EXPIRATION]: [
              ...errors[CREDIT_CARD_EXPIRATION],
              INVALID_CREDIT_CARD_EXPIRATION
            ]
          }
        });
        return false;
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_EXPIRATION]: []
        }
      });
      return true;

    case CREDIT_CARD_CVV:
      if (!isValidCreditCardCVV(values[CREDIT_CARD_CVV])) {
        resolver({
          values: { ...values },
          errors: {
            ...errors,
            [CREDIT_CARD_CVV]: [
              ...errors[CREDIT_CARD_CVV],
              INVALID_CREDIT_CARD_CVV
            ]
          }
        });
        return false;
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_CVV]: []
        }
      });
      return true;

    case CREDIT_CARD_ZIP_CODE:
      if (!isValidCreditCardZipCode(values[CREDIT_CARD_ZIP_CODE])) {
        resolver({
          values: { ...values },
          errors: {
            ...errors,
            [CREDIT_CARD_ZIP_CODE]: [
              ...errors[CREDIT_CARD_ZIP_CODE],
              INVALID_CREDIT_CARD_ZIP_CODE
            ]
          }
        });
        return false;
      }

      resolver({
        values: { ...values },
        errors: {
          ...errors,
          [CREDIT_CARD_ZIP_CODE]: []
        }
      });
      return true;

    default:
      return false;
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
    error => !!errors[error] && errors[error].length
  );

  return inputsAreValid && !hasErrors;
};

const sanitizeCreditCardExpiration = expiration => expiration.replace('/', '');

export { sanitizeCreditCardExpiration, validateInput, validateForm };
