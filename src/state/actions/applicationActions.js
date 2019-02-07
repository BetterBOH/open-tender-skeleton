import { setupBrandibbleRedux as setupOpenTenderRedux } from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderConfig => (
  dispatch,
  getState
) => {
  return dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise(resolve => {
      return dispatch(setupOpenTenderRedux(OpenTenderConfig)).then(resolve);
    })
  });
};
