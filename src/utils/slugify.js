export default (string, delimiter = '-') => {
  return string
    .toLowerCase()
    .split(' ')
    .join(delimiter);
};
