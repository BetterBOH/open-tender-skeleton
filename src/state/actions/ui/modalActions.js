import { removeInvalidLineItems } from 'state/actions/orderActions';
import get from 'utils/get';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';

export const SET_MODAL = 'SET_MODAL';
export const setModal = (variant = '', data = {}) => ({
  type: SET_MODAL,
  payload: {
    variant,
    data
  }
});

export const RESET_MODAL = 'RESET_MODAL';
export const resetModal = () => ({
  type: RESET_MODAL
});

export const CLOSE_LINE_ITEM_EDITOR = 'CLOSE_LINE_ITEM_EDITOR';
export const closeLineItemEditor = () => dispatch =>
  dispatch({
    type: CLOSE_LINE_ITEM_EDITOR,
    payload: Promise.all([
      dispatch(removeInvalidLineItems()),
      dispatch(resetModal())
    ]).then(get(getConfig(ConfigKeys.STATE), 'history').goBack)
  });
