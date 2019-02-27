import { createSelector } from 'reselect';
import querystring from 'querystring';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'router.location.search', ''),
  tokenParam => {
    const parsedToken = querystring.parse(tokenParam);
    return get(parsedToken, '?token', '');
  }
);
