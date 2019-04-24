import {
  setServiceType,
  addOptionToLineItem,
  removeOptionFromLineItem,
  removeLineItem,
  Constants,
  setRequestedAt,
  validateCurrentCart
} from 'brandibble-redux';
import { DateTime } from 'luxon';
import { setLocationType } from 'state/actions/locationsActions';
import { currentMenuOrderType } from 'state/selectors';
import get from 'utils/get';
import { ASAP } from 'constants/OpenTender';
const { CATERING } = Constants.OrderTypes;

export const VALIDATE_AND_ATTEMPT_SET_REQUESTED_AT =
  'VALIDATE_AND_ATTEMPT_SET_REQUESTED_AT';
export const SET_ORDER_AND_SERVICE_TYPE = 'SET_ORDER_AND_SERVICE_TYPE';
export const setOrderAndServiceType = (
  orderRef,
  orderType,
  serviceType
) => dispatch =>
  dispatch({
    type: SET_ORDER_AND_SERVICE_TYPE,
    payload: Promise.all([
      dispatch(setServiceType(orderRef, serviceType)),
      dispatch(setLocationType(orderType))
    ])
  });

export const REMOVE_INVALID_LINE_ITEMS = 'REMOVE_INVALID_LINE_ITEMS';
export const removeInvalidLineItems = () => (dispatch, getState) => {
  const state = getState();
  const orderRef = get(state, 'openTender.session.order.ref');
  const lineItemsData = get(
    state,
    'openTender.session.order.lineItemsData',
    []
  );

  if (!lineItemsData.length) {
    return Promise.resolve();
  }

  const lineItemsToRemove = lineItemsData.reduce(
    (itemsToRemove, currentLineItem) => {
      if (!get(currentLineItem, 'isValid')) {
        itemsToRemove.push(dispatch(removeLineItem(orderRef, currentLineItem)));
      }
      return itemsToRemove;
    },
    []
  );

  if (!lineItemsToRemove.length) {
    return Promise.resolve();
  }

  return Promise.all(lineItemsToRemove);
};

export const SWAP_OR_ADD_OPTION_TO_LINE_ITEM =
  'SWAP_OR_ADD_OPTION_TO_LINE_ITEM';
export const swapOrAddOptionToLineItem = (
  orderRef,
  lineItem,
  optionGroup,
  optionItem
) => dispatch => {
  const optionGroupMapping = lineItem.optionGroupMappings.find(
    mapping => mapping.id === optionGroup.id
  );
  const optionGroupData = get(optionGroupMapping, 'optionGroupData');
  const optionItemPresentInOptionGroupMapping = get(
    optionGroupMapping,
    'optionItems',
    []
  ).find(
    optionItem =>
      get(optionItem, 'presence') === Constants.OptionItemsStatus.PRESENT
  );

  const payload = async () => {
    try {
      if (!!optionItemPresentInOptionGroupMapping) {
        await dispatch(
          removeOptionFromLineItem(
            orderRef,
            lineItem,
            get(optionItemPresentInOptionGroupMapping, 'optionItemData')
          )
        );
      }

      await dispatch(
        addOptionToLineItem(orderRef, lineItem, optionGroupData, optionItem)
      );
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
    }
  };

  return dispatch({
    type: SWAP_OR_ADD_OPTION_TO_LINE_ITEM,
    payload: payload()
  });
};

export const validateAndAttemptSetRequestedAt = requestedAt => (
  dispatch,
  getState
) => {
  const state = getState();
  const openTenderRef = get(state, 'openTender.ref');
  const currentOrderData = get(state, 'openTender.session.order.orderData');
  // If the current cart is empty, don't bother validating
  if (!get(currentOrderData, 'cart', []).length) {
    return dispatch(_finalizeSetRequestedAt(requestedAt));
  }

  const payload = dispatch(
    validateCurrentCart(openTenderRef, { requested_at: requestedAt })
  ).then(() => dispatch(_finalizeSetRequestedAt(requestedAt)));
};

/**
 * PRIVATE
 */

const _finalizeSetRequestedAt = requestedAt => (dispatch, getState) => {
  const state = getState();
  const orderRef = get(state, 'openTender.session.order.ref');
  const orderData = get(state, 'openTender.session.order.orderData');

  const { wantsFuture, reason } = _determineIfWantsFuture(requestedAt);

  if (reason === Reasons.IS_PAST) {
    requestedAt = ASAP;
  }

  /**
   * In the case of a catering order, we need to ensure
   * an order's requested_at is never set to 'asap'.
   *
   * If we find that we are attempting to set the requested_at to 'asap'
   * and the current order is a catering order,
   * we instead request the location with the most up to date
   * data regarding orderable days and times (see include_time flag),
   * and instead set the requested_at to the first available time for
   * that location
   */

  if (requestedAt === ASAP && currentMenuOrderType(state) === CATERING) {
    const openTenderRef = get(state, 'openTender.ref');
    const locationId = get(orderData, 'location_id');
    const serviceType = get(orderData, 'service_type');
    const currentLocationForTimezone = timezoneForCurrentLocation(state);
    const now = DateTime.local()
      .setZone(currentLocationForTimezone)
      .toJSDate();

    return dispatch(
      fetchLocation(openTenderRef, locationId, {
        service_type: serviceType,
        requested_at: now,
        include_times: true
      })
    ).then(res => {
      const firstAvailableOrderTime = get(
        res,
        `value.first_times.${serviceType}.utc`
      );

      const { wantsFuture } = _determineIfWantsFuture(firstAvailableOrderTime);

      return dispatch(
        setRequestedAt(orderRef, firstAvailableOrderTime, wantsFuture)
      );
    });
  }

  return dispatch(setRequestedAt(orderRef, requestedAt, wantsFuture));
};

const Reasons = {
  IS_ASAP: 'is asap',
  IS_PAST: 'is past',
  IS_FUTURE: 'is future',
  IS_NOW: 'is now'
};

const _determineIfWantsFuture = requestedAt => {
  // If the requestedtAt is 'asap'
  // set wantsFuture to false
  if (requestedAt === ASAP) {
    return {
      wantsFuture: false,
      reason: Reasons.IS_ASAP
    };
  }

  const now = DateTime.local();
  const requestedAtAsLuxonDateTime = DateTime.fromISO(requestedAt);

  // If the requestedtAt is in the past (rare case)
  // set wantsFuture to false
  if (requestedAtAsLuxonDateTime < now) {
    return {
      wantsFuture: false,
      reason: Reasons.IS_PAST
    };
  }

  if (requestedAtAsLuxonDateTime === now) {
    return {
      wantsFuture: false,
      reason: Reasons.IS_NOW
    };
  }

  // If the requestedAt is in the future
  // set wantsFuture to true
  if (requestedAtAsLuxonDateTime > now) {
    return {
      wantsFuture: true,
      reason: Reasons.IS_FUTURE
    };
  }
};
