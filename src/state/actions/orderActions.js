import {
  setServiceType,
  addOptionToLineItem,
  removeOptionFromLineItem,
  removeLineItem,
  Constants
} from 'brandibble-redux';
import { setLocationType } from 'state/actions/locationsActions';
import get from 'utils/get';

export const HANDLE_CART_VALIDATION_ERRORS = 'HANDLE_CART_VALIDATION_ERRORS';
export const handleCartValidationErrors = validationErrorsWithHandler => {
  console.log(validationErrorsWithHandler);
  return {
    type: HANDLE_CART_VALIDATION_ERRORS,
    payload: validationErrorsWithHandler
  };
};

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
