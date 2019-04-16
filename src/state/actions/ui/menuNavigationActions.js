export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const setCurrentCategory = (currentCategory = {}) => ({
  type: SET_CURRENT_CATEGORY,
  payload: {
    currentCategory
  }
});
