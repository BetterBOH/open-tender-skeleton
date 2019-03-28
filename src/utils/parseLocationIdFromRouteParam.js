import get from 'utils/get';

export default (param, splitChar = '-') => {
  const arrayFromSplit = param.split(splitChar);

  if (!arrayFromSplit || !get(arrayFromSplit, []).length) return null;
  return parseInt(arrayFromSplit[0], 10);
};
