import { Brandibble } from 'brandibble-redux';
import localforage from 'localforage';
import { ORIGIN, STAGING_HOST } from 'constants/Brandibble';

export default config => {
  const { apiKey, brandId } = config;
  ``;

  if (!apiKey) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Brandibble API key.`
    );
  }

  if (!brandId) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Brandibble brand ID.`
    );
  }

  const apiEndpoint = STAGING_HOST;
  const origin = config.origin || ORIGIN;
  const storage = config.storage || localforage;

  console.log(
    new Brandibble({
      apiKey,
      brandId,
      apiEndpoint,
      origin,
      storage
    })
  );

  return new Brandibble({
    apiKey,
    brandId,
    apiEndpoint,
    origin,
    storage
  });
};
