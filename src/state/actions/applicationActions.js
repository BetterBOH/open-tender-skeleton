import {
  setupBrandibbleRedux as setupOpenTenderRedux,
  fetchLocations
} from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderRef => (dispatch, getState) =>
  dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise(resolve => {
      return Promise.all([dispatch(setupOpenTenderRedux(OpenTenderRef))]).then(
        ([setup]) => {
          const OpenTenderRef = getState().openTender.ref;

          return new Promise(() => {
            return dispatch(fetchLocations(OpenTenderRef)).then(locations => {
              console.log(locations);
              resolve();
            });
          });
        }
      );
    })
  });
