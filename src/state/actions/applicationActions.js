import {
  setupBrandibbleRedux as setupOpenTenderRedux,
  fetchBrand
} from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderConfig => (
  dispatch,
  getState
) => {
  return dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise(resolve => {
      return dispatch(setupOpenTenderRedux(OpenTenderConfig)).then(() => {
        const ref = getState().openTender.ref;
        resolve(dispatch(fetchBrand(ref)));
      });
    })
  });
};
