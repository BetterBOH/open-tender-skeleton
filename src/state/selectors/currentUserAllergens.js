import { createSelector } from 'reselect';
import { userIsAuthenticated } from 'state/selectors';
import get from 'utils/get';

export default createSelector(
  state => userIsAuthenticated(state),
  state => get(state, 'openTender.user.attributes.allergens'),
  state => get(state, 'allergens.allergens'),
  (userIsAuthenticated, userAllergens, unauthenticatedUserAllergens) => {
    return userIsAuthenticated
      ? userAllergens || []
      : unauthenticatedUserAllergens || [];
  }
);
