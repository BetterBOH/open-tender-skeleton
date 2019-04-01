import {
  setServiceType,
  addOptionToLineItem,
  removeOptionFromLineItem,
  removeLineItem
} from 'brandibble-redux';
import { setLocationType } from 'state/actions/locationsActions';
import { OptionItemsStatus } from 'constants/OpenTender';
import get from 'utils/get';

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
    (itemsToRemove, currentItem) => {
      if (!get(currentItem, 'isValid')) {
        itemsToRemove.push(dispatch(removeLineItem(orderRef, currentItem)));
      }
      return itemsToRemove;
    },
    []
  );

  if (!lineItemsToRemove.length) {
    Promise.resolve();
  }

  return Promise.all(lineItemsToRemove);
};

export const TOGGLE_ADD_OPTION_TO_LINE_ITEM = 'TOGGLE_ADD_OPTION_TO_LINE_ITEM';
export const toggleAddOptionToLineItem = (
  orderRef,
  lineItem,
  optionGroup,
  optionItem
) => dispatch => {
  const optionGroupData = get(optionGroup, 'optionGroupData');
  const optionItemPresentInOptionGroupMapping = get(
    optionGroup,
    'optionItems',
    []
  ).find(
    optionItem => get(optionItem, 'presence') === OptionItemsStatus.PRESENT
  );

  const payload = async () => {
    try {
      /**
       * If an option item is already PRESENT in the
       * optionGroup, we remove it before adding the new one
       */
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
      console.error(err);
    }
  };

  return dispatch({
    type: TOGGLE_ADD_OPTION_TO_LINE_ITEM,
    payload: payload()
  });
};
