import { setupBrandibbleRedux as setupOpenTenderRedux } from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderRef => dispatch => {
  return dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise(resolve => {
      return dispatch(setupOpenTenderRedux(OpenTenderRef)).then(resolve);
    })
  });
};
