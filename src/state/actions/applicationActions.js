import { setupBrandibbleRedux as setupOpenTenderRedux } from 'brandibble-redux';
import { createNewOrder } from 'state/actions/open-tender/orderActions';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderConfig => (
  dispatch,
  getState
) => {
  return dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise(resolve => {
      return dispatch(setupOpenTenderRedux(OpenTenderConfig)).then(() => {
        const OpenTenderRef = getState().openTender.ref;

        return dispatch(createNewOrder(OpenTenderRef)).then(resolve);
      });
    })
  });
};
