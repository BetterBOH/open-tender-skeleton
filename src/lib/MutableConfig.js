import get from 'utils/get';

const mutableConfig = {};

export const setConfig = (key, value) => {
  mutableConfig[key] = value;

  return mutableConfig;
};

export const getConfig = (key = null) =>
  key ? get(mutableConfig, key) : mutableConfig;
