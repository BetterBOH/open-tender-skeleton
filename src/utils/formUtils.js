import { InputTypes } from 'constants/Forms';
import {
  isValidName,
  isValidEmail,
  isValidPhoneNumber
} from 'utils/validation';

const { FIRST_NAME, LAST_NAME, EMAIL, PHONE } = InputTypes;

const validateInput = (
  field = '',
  values = {},
  errors = {},
  Language,
  resolver = f => f
) => {
  switch (field) {
    case FIRST_NAME:
      if (!isValidName(values[FIRST_NAME])) {
        resolver({
          ...errors,
          [FIRST_NAME]: [
            ...errors[FIRST_NAME],
            Language.t('checkout.contact.errors.firstName')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [FIRST_NAME]: []
      });
      return true;

    case LAST_NAME:
      if (!isValidName(values[LAST_NAME])) {
        resolver({
          ...errors,
          [LAST_NAME]: [
            ...errors[LAST_NAME],
            Language.t('checkout.contact.errors.lastName')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [LAST_NAME]: []
      });
      return true;

    case EMAIL:
      if (!isValidEmail(values[EMAIL])) {
        resolver({
          ...errors,
          [EMAIL]: [
            ...errors[EMAIL],
            Language.t('checkout.contact.errors.email')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [EMAIL]: []
      });
      return true;

    case PHONE:
      if (!isValidPhoneNumber(values[PHONE])) {
        resolver({
          ...errors,
          [PHONE]: [
            ...errors[PHONE],
            Language.t('checkout.contact.errors.phoneNumber')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [PHONE]: []
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

export { validateInput, validateForm };
