import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'locations', []),
  orderTypeQueryResponses =>
    orderTypeQueryResponses.reduce((locationsArray, orderTypeQueryResponse) => {
      return locationsArray.concat(get(orderTypeQueryResponse, 'value', []));
    }, [])
);
