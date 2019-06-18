import { select, put } from 'redux-saga/effects';
import { addAllergens } from 'brandibble-redux';
import { currentUserAllergens } from 'state/selectors';
import get from 'utils/get';
import {
  LocalStorageKeys,
  LOCAL_STORAGE_DELIMITER
} from 'constants/OpenTender';

export const onAuthenticateUser = function*() {
  const unauthenticatedAllergens = localStorage.getItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
  );

  if (unauthenticatedAllergens) {
    const userAllergens = yield select(currentUserAllergens);

    const allergens = unauthenticatedAllergens.split(LOCAL_STORAGE_DELIMITER);

    if (allergens.length) {
      const openTenderRef = yield select(state => get(state, 'openTender.ref'));
      const allergensToAdd = allergens.filter(
        allergen => !userAllergens.includes(allergen)
      );

      yield put(addAllergens(openTenderRef, allergensToAdd));
      yield localStorage.removeItem(
        LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
      );
    }
  }
};
