import { ServerErrorCodes } from 'constants/OpenTender';

export default (serverCode, Language) => {
  switch (serverCode) {
    case ServerErrorCodes.DUPLICATE_EMAIL:
      return Language.t('checkout.errors.existingAccount');
    case ServerErrorCodes.PROMO_CODE_NOT_FOUND:
      return Language.t('checkout.errors.promoCodeIsInvalid');
    case ServerErrorCodes.INVALID_PROMO_CODE:
      return Language.t('checkout.errors.promoCodeIsInvalid');
    default:
      return null;
  }
};
