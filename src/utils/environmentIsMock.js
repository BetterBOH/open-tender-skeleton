export default () => {
  return typeof MOCK_ENV !== 'undefined' && MOCK_ENV; // eslint-disable-line no-undef
};
