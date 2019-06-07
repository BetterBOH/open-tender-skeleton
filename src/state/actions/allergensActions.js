import { LocalStorageKeys } from 'constants/OpenTender';

const delimiter = ',';

export const HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE =
  'HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE';
export const hydrateAllergensFromLocalStorage = () => {
  const previousAllergens = localStorage.getItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
  );

  return {
    type: HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE,
    payload: previousAllergens ? previousAllergens.split(delimiter) : []
  };
};

export const ADD_ALLERGENS_TO_LOCAL_STORAGE = 'ADD_ALLERGENS_TO_LOCAL_STORAGE';
export const addAllergensToLocalStorage = (allergens = []) => {
  const previousAllergens = localStorage.getItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
  );

  const updatedAllergens = previousAllergens
    ? previousAllergens.split(delimiter).concat(allergens)
    : allergens;

  localStorage.setItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS,
    updatedAllergens.join(delimiter)
  );

  return {
    type: ADD_ALLERGENS_TO_LOCAL_STORAGE,
    payload: updatedAllergens
  };
};

export const REMOVE_ALLERGENS_FROM_LOCAL_STORAGE =
  'REMOVE_ALLERGENS_FROM_LOCAL_STORAGE';
export const removeAllergensFromLocalStorage = (allergens = []) => {
  const previousAllergens = localStorage.getItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS
  );

  const updatedAllergens = previousAllergens
    ? previousAllergens
        .split(delimiter)
        .filter(allergen => !allergens.includes(allergen))
    : [];

  localStorage.setItem(
    LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS,
    updatedAllergens.join(delimiter)
  );

  return {
    type: REMOVE_ALLERGENS_FROM_LOCAL_STORAGE,
    payload: updatedAllergens
  };
};
