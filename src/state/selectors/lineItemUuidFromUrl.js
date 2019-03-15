import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'router.location.pathname', ''),
  path => path.split('/').slice(-1)[0]
);
