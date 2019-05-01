import { ServerErrorCodes } from 'constants/OpenTender';

export default (serverCode, Language) => {
  switch (serverCode) {
    case ServerErrorCodes.DUPLICATE_EMAIL:
      return Language.t('checkout.errors.existingAccount');
    default:
      return null;
  }
};
