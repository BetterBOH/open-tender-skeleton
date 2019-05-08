import { createSelector } from 'reselect';
import { orderValidations } from 'state/selectors';
import get from 'utils/get';
import { ServerErrorCodes } from 'constants/OpenTender';

export default createSelector(
  state => orderValidations(state),
  currentOrderValidations => {
    return currentOrderValidations
      .filter(
        validation =>
          get(validation, 'code') === ServerErrorCodes.PROMO_CODE_NOT_FOUND ||
          get(validation, 'code') === ServerErrorCodes.INVALID_PROMO_CODE
      )
      .map(error => get(error, 'code', ''));
  }
);
