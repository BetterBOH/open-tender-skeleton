import { createSelector } from 'reselect';
import get from 'utils/get';
import { ServerErrorCodes } from 'constants/OpenTender';

export default createSelector(
  state => get(state, 'openTender.error.authenticateUser'),
  errors => {
    if (!errors) return [];

    const errorCodes = [
      ServerErrorCodes.INVALID_LOGIN_LEVELUP,
      ServerErrorCodes.INVALID_LOGIN_BOTH
    ];

    return errors.reduce((allErrors, error) => {
      if (errorCodes.includes(get(error, 'code'))) {
        allErrors.push(error.code);
      }
      return allErrors;
    }, []);
  }
);
