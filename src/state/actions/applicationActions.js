import { setupBrandibbleRedux as setupOpenTenderRedux } from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderRef => dispatch =>
  dispatch({
    type: INITIALIZE_APPLICATION,
    payload: dispatch(setupOpenTenderRedux(OpenTenderRef))
  });
