const capitalize = str =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

export default str => {
  const string = str
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, ' ')
    .split(' ')
    .reduce((result, word) => result + capitalize(word));
  return string.charAt(0) + string.slice(1);
};
