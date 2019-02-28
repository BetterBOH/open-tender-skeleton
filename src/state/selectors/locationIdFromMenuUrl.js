import { createSelector } from 'reselect';
import querystring from 'querystring';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'router.location.pathname', ''),
  path =>
    path
      .split(/[\/-]+/)
      .map(str => parseInt(str))
      .find(f => f)
);
