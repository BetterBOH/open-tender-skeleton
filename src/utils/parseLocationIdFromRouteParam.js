export default (param, splitChar = '-') => {
  const arrayFromSplit = param.split(splitChar);

  if (!arrayFromSplit || !arrayFromSplit.length) return null;
  return parseInt(arrayFromSplit[0], 10);
};
