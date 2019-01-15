import { setupBrandibbleRedux } from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = BrandibbleClient => (dispatch, getState) =>
  dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise(resolve => {
      return Promise.all([dispatch(setupBrandibbleRedux(BrandibbleClient))]);
    })
  });
