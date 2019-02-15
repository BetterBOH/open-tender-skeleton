import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.user'),
  openTenderUser => {
    if (!openTenderUser) return false;

    return (
      !isEmpty(get(openTenderUser, 'attributes', {})) &&
      !!get(openTenderUser, 'attributes.customer_id')
    );
  }
);
