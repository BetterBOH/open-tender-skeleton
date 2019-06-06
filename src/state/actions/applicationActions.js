import {
  setupBrandibbleRedux as setupOpenTenderRedux,
  unauthenticateUser
} from 'brandibble-redux';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = OpenTenderRef => dispatch =>
  dispatch({
    type: INITIALIZE_APPLICATION,
    payload: dispatch(setupOpenTenderRedux(OpenTenderRef)).catch(errors => {
      errors.forEach(error => {
        switch (error.code) {
          case 'customer_token.expired':
            dispatch(unauthenticateUser(OpenTenderRef));
            break;
          default:
            break;
        }
      });
    })
  });
