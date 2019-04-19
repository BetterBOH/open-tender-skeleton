export default () => {
  const search = window.location.search;

  if (!search) return null;

  const params = search.split('&');
  const token = params
    .find(param => param.includes('?token='))
    .split('?token=')[1];

  return token;
};
