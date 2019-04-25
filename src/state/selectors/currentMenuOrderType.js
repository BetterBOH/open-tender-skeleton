import { createSelector } from 'reselect';

import get from 'utils/get';
import { currentMenu } from 'state/selectors';

export default createSelector(
  state => currentMenu(state),
  currentMenu => {
    if (!currentMenu) return null;
    return get(currentMenu, 'order_type');
  }
);
