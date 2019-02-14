import { validateUser } from 'brandibble-redux';

export const VALIDATE_USER_EMAIL = 'VALIDATE_USER_EMAIL';
export const validateUserEmail = (ref, email) => dispatch =>
  dispatch({
    type: VALIDATE_USER_EMAIL,
    payload: new Promise(resolve => {
      dispatch(validateUser(ref, email)).then(() => resolve(email));
    })
  });
