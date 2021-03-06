import { put, select } from 'redux-saga/effects';
import { matchPath } from 'react-router-dom';
import ConfigKeys from 'constants/ConfigKeys';
import ModalTypes from 'constants/ModalTypes';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import { ApiVersion, ErrorCodes, validateCurrentCart } from 'brandibble-redux';

import { setModal } from 'state/actions/ui/modalActions';
import { handleCartValidationErrors } from 'state/actions/orderActions';
import getLocationSlug from 'utils/getLocationSlug';

/* eslint-disable require-yield */
export const onAddLineItem = function*(action) {
  const { payload } = action;
  const lineItem = get(payload, 'lineItem');
  const history = get(getConfig(ConfigKeys.STATE), 'history');

  const basename = getRoutes(RouteProperties.BASENAME).MENUS;
  const match = matchPath(window.location.pathname, {
    path: getRoutes().MENUS,
    exact: getRoutes(RouteProperties.EXACT).MENUS
  });
  const locationMatch = get(match, 'params.locationId');

  const currentLocation = yield select(state => {
    const locationId = get(
      state,
      'openTender.session.order.orderData.location_id'
    );
    const locationsById = get(state, 'openTender.data.locations.locationsById');
    return get(locationsById, locationId, {});
  });

  if (
    window.location.pathname === getRoutes().DASHBOARD &&
    !!get(lineItem, 'operationMaps.length')
  ) {
    return yield history.push(
      `${basename}/${getLocationSlug(currentLocation)}/${lineItem.uuid}`
    );
  }

  if (locationMatch) {
    return history.push(`${basename}/${locationMatch}/${lineItem.uuid}`);
  }
};

export const onHandleCartValidationErrors = function*(action) {
  const errorsWithHandlers = get(action, 'payload', {});
  const processIsCancellable = get(action, 'meta.processIsCancellable', true);

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
      const proceedSteps = optionalCallback => {
        // If proceed is null, we return a
        // resolved promise that calls an optional callback
        // passed to proceed steps (e.g. see setModal handleAcceptClick)
        // if provided. Otherwise, we doing nothing, decrement the errorsToHandleCount
        // and call resolveHoldingPromise
        if (proceed === null) {
          return Promise.resolve().then(() => {
            !!optionalCallback && typeof optionalCallback === 'function'
              ? optionalCallback()
              : null;

            errorsToHandleCount -= 1;
            resolveHoldingPromise();
          });
        }

        return proceed().then(() => {
          !!optionalCallback && typeof optionalCallback === 'function'
            ? optionalCallback()
            : null;

          errorsToHandleCount -= 1;
          resolveHoldingPromise();
        });
      };

      /**
       * Handles showing correct UI
       * depending on error code
       * */
      switch (errorCode) {
        case ErrorCodes.validateCart[ApiVersion.V2].invalidItems:
          yield put(
            setModal(ModalTypes.INVALID_ITEMS_IN_CART, {
              error: currentError.error,
              handleAcceptClick: proceedSteps,
              freezeModal: !processIsCancellable
            })
          );
          yield holdingPromise;
          break;

        case ErrorCodes.validateCart[ApiVersion.V2].locationIsClosed:
          errorsToHandleCount = -1;
          yield put(
            setModal(ModalTypes.LOCATION_IS_CLOSED, {
              handleAcceptClick: proceedSteps,
              freezeModal: !processIsCancellable
            })
          );
          yield holdingPromise;
          break;

        // Add error cases here (ensure you yield to holdingPromise e.g. line 93):
        case ErrorCodes.validateCart[ApiVersion.V2].unmetDeliveryMinimum:
          errorsToHandleCount = -1;
          yield put(
            setModal(ModalTypes.BELOW_DELIVERY_MINIMUM, {
              handleAcceptClick: proceedSteps,
              freezeModal: !processIsCancellable
            })
          );
          yield holdingPromise;
          break;

        default:
          /**
           * TODO: Sentry
           * We can't match the error code
           */
          errorsToHandleCount = -1;
          yield put(
            setModal(ModalTypes.GENERIC_ERROR, {
              handleAcceptClick: proceedSteps,
              freezeModal: !processIsCancellable
            })
          );
          yield holdingPromise;
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

    /**
     * put cannot be used in this callback, so we import
     * dispatch from our store and dispatch instead
     */
    const store = get(getConfig(ConfigKeys.STATE), 'store');

    return yield put(
      validateCurrentCart(
        openTenderRef,
        null,
        errors =>
          store.dispatch(
            handleCartValidationErrors(errors, processIsCancellable)
          ),
        { apiVersion: 'v2' }
      )
    );
  }
};
