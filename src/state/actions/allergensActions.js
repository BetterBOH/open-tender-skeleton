import { LocalStorageKeys } from 'constants/OpenTender';

const delimiter = ',';

export const HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE =
  'HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE';
export const hydrateAllergensFromLocalStorage = () => ({
  type: HYDRATE_ALLERGENS_FROM_LOCAL_STORAGE,
  payload: localStorage
    .getItem(LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS)
    .split(delimiter)
});

export const ADD_ALLERGENS_TO_LOCAL_STORAGE = 'ADD_ALLERGENS_TO_LOCAL_STORAGE';
export const addAllergensToLocalStorage = (allergens = []) => {
  const updatedAllergens = localStorage
    .getItem(LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS)
    .split(delimiter)
    .concat(allergens);

  localStorage.setItem(updatedAllergens.join(delimiter));

  return {
    type: ADD_ALLERGENS_TO_LOCAL_STORAGE,
    payload: updatedAllergens
  };
};

export const REMOVE_ALLERGENS_FROM_LOCAL_STORAGE =
  'REMOVE_ALLERGENS_FROM_LOCAL_STORAGE';
export const removeAllergensFromLocalStorage = (allergens = []) => {
  const updatedAllergens = localStorage
    .getItem(LocalStorageKeys.UNAUTHENTICATED_USER_ALLERGENS)
    .split(delimiter)
    .filter(allergen => !allergens.includes(allergen));

  localStorage.setItem(updatedAllergens.join(delimiter));

  return {
    type: REMOVE_ALLERGENS_FROM_LOCAL_STORAGE,
    payload: updatedAllergens
  };
};
