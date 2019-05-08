import InputTypes from 'constants/InputTypes';
import {
  isValidName,
  isValidEmail,
  isValidPhoneNumber
} from 'utils/validation';

const validateInput = (
  field = '',
  values = {},
  errors = {},
  Language,
  resolver = f => f
) => {
  switch (field) {
    case InputTypes.FIRST_NAME:
      if (!isValidName(values[InputTypes.FIRST_NAME])) {
        resolver({
          ...errors,
          [InputTypes.FIRST_NAME]: [
            ...errors[InputTypes.FIRST_NAME],
            Language.t('checkout.contact.errors.firstName')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [InputTypes.FIRST_NAME]: []
      });
      return true;

    case InputTypes.LAST_NAME:
      if (!isValidName(values[InputTypes.LAST_NAME])) {
        resolver({
          ...errors,
          [InputTypes.LAST_NAME]: [
            ...errors[InputTypes.LAST_NAME],
            Language.t('checkout.contact.errors.lastName')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [InputTypes.LAST_NAME]: []
      });
      return true;

    case InputTypes.EMAIL:
      if (!isValidEmail(values[InputTypes.EMAIL])) {
        resolver({
          ...errors,
          [InputTypes.EMAIL]: [
            ...errors[InputTypes.EMAIL],
            Language.t('checkout.contact.errors.email')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [InputTypes.EMAIL]: []
      });
      return true;

    case InputTypes.PHONE:
      if (!isValidPhoneNumber(values[InputTypes.PHONE])) {
        resolver({
          ...errors,
          [InputTypes.PHONE]: [
            ...errors[InputTypes.PHONE],
            Language.t('checkout.contact.errors.phoneNumber')
          ]
        });
        return false;
      }

      resolver({
        ...errors,
        [InputTypes.PHONE]: []
      });
      return true;

    default:
      return false;
  }
};

export { validateInput };
