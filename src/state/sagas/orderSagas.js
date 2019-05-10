import { put, select } from 'redux-saga/effects';
import { matchPath } from 'react-router-dom';
import ConfigKeys from 'constants/ConfigKeys';
import ModalTypes from 'constants/ModalTypes';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import { ApiVersion, ErrorCodes, validateCurrentCart } from 'brandibble-redux';

import { store } from 'state/store';

import { setModal } from 'state/actions/ui/modalActions';
import { handleCartValidationErrors } from 'state/actions/orderActions';

/* eslint-disable require-yield */
export const onAddLineItem = function*(action) {
  const { payload } = action;
  const lineItem = get(payload, 'lineItem');
  const lineItemIsConfigurable = !!get(lineItem, 'operationMaps.length');
  const history = get(getConfig(ConfigKeys.STATE), 'history');

  const basename = getRoutes(RouteProperties.BASENAME).MENUS;
  const match = matchPath(window.location.pathname, {
    path: getRoutes().MENUS,
    exact: getRoutes(RouteProperties.EXACT).MENUS
  });
  const locationMatch = get(match, 'params.locationId');

  if (lineItemIsConfigurable && locationMatch) {
    return history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};

export const onHandleCartValidationErrors = function*(action) {
  const errorsWithHandlers = action.payload;

  let errorsToHandleCount = errorsWithHandlers.length;

  while (errorsToHandleCount > 0) {
    const currentError =
      errorsWithHandlers[errorsWithHandlers.length - errorsToHandleCount];

    if (currentError) {
      const { error, proceed } = currentError;
      const errorCode = get(error, 'code');

      /** Promise to yield */
      let resolveHoldingPromise;
      const holdingPromise = new Promise(resolve => {
        resolveHoldingPromise = resolve;
      });

      /**
       * Error proceed callback
       * decrements error count after it's fulfilled
       * resolves yielded promise
       * */
      const proceedSteps = () =>
        // TODO: what happens here if proceed is null?
        proceed().then(() => {
          errorsToHandleCount -= 1;
          resolveHoldingPromise();
        });

      /**
       * Handles showing correct UI
       * depending on error code
       * */
      switch (errorCode) {
        case ErrorCodes.validateCart[ApiVersion.V2].invalidItems:
          yield put(
            setModal(ModalTypes.INVALID_ITEMS_IN_CART, {
              error: currentError.error,
              handleAcceptClick: proceedSteps
            })
          );
          yield holdingPromise;
          break;

        // Add error cases here:

        default:
          /** If we can't match the error code
           * we attempt to move on to the following error
           */
          errorsToHandleCount -= 1;
          break;
      }
    } else {
      errorsToHandleCount = -1;
      return;
    }
  }

  /**
   * If errorsToHandleCount = -1
   * we assume there are no errors/errors cannot be handled
   * so we return early
   * */
  if (errorsToHandleCount === -1) {
    return;
  }

  /**
   * If all errors have been worked through
   * and errorsToHandleCount = 0
   * we attempt to validate the cart again.
   * */
  if (errorsToHandleCount === 0) {
    const openTenderRef = yield select(state => state.openTender.ref);

    return yield put(
      validateCurrentCart(openTenderRef, null, { apiVersion: 'v2' }, errors =>
        store.dispatch(handleCartValidationErrors(errors))
      )
    );
  }
};
