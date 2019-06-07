import { setupBrandibbleRedux as setupOpenTenderRedux } from 'brandibble-redux';
import { hydrateAllergensFromLocalStorage } from 'state/actions/allergensActions';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderRef => dispatch =>
  dispatch({
    type: INITIALIZE_APPLICATION,
    payload: Promise.all([
      dispatch(setupOpenTenderRedux(OpenTenderRef)),
      dispatch(hydrateAllergensFromLocalStorage())
    ])
  });
