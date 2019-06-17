import { select } from 'redux-saga/effects';
import { addAllergens } from 'brandibble-redux';
import { currentUserAllergens } from 'state/selectors';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import {
  LocalStorageKeys,
  LOCAL_STORAGE_DELIMITER
} from 'constants/OpenTender';
import ConfigKeys from 'constants/ConfigKeys';

export const onAuthenticateUser = function*() {
  const unauthenticatedAllergens = localStorage.getItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
  );

  if (unauthenticatedAllergens) {
    const userAllergens = yield select(currentUserAllergens);

    const allergens = unauthenticatedAllergens.split(LOCAL_STORAGE_DELIMITER);
    const store = get(getConfig(ConfigKeys.STATE), 'store');

    if (allergens.length) {
      const openTenderRef = yield select(state => get(state, 'openTender.ref'));
      const allergensToAdd = allergens.filter(
        allergen => !userAllergens.includes(allergen)
      );

      yield store.dispatch(addAllergens(openTenderRef, allergensToAdd));
      yield localStorage.removeItem(
        LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
      );
    }
  }
};
