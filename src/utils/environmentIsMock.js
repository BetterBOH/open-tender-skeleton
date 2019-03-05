export default () => {
  return typeof MOCK_ENV !== 'undefined' && MOCK_ENV;
};
