import { setServiceType, addLineItem } from 'brandibble-redux';
import { setLocationType } from 'state/actions/locationsActions';
import { setModal } from 'state/actions/ui/modalActions';

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

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (openTenderRef, item) => (dispatch, getState) =>
  dispatch({
    type: ADD_ITEM,
    payload: dispatch(addLineItem(openTenderRef, item)).then(response => {
      console.log(response);
      const lineItemId = get(response, 'value.lineItem.uuid');
      const lineItem = get(
        getState(),
        'openTender.session.order.lineItemsData',
        []
      ).find(item => item.uuid === lineItemId);
      const lineItemHasOptionGroups = !!get(
        lineItem,
        'optionGroupMappings.length'
      );
      const builderIsOpen =
        !!get(getState(), 'modal.modalIsActive') &&
        !!get(getState(), 'modal.data.lineItem');

      if (builderIsOpen || !lineItemHasOptionGroups) return null;

      // TO-DO: supply Modal variant without making Redux reference our presentation UI system
      const modalVariant = undefined;
      return dispatch(setModal(modalVariant, { lineItem }));
    })
  });
