const initialState = {
  tester: 'Hello, Store!'
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
