export default (params = []) => {
  return params.reduce((queryString, param, currentIndex) => {
    if (!param) return queryString;

    if (currentIndex === 0) {
      return `${param.split(' ').join('%20')}`;
    } else {
      return `${queryString}+${param.split(' ').join('%20')}`;
    }
  }, '');
};
