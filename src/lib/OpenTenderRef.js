import { Brandibble as OpenTender } from 'brandibble-redux';
import localforage from 'localforage';
import { ORIGIN, STAGING_HOST } from 'constants/OpenTender';

export default config => {
  const { apiKey, brandId } = config;

  console.log(config);

  if (!apiKey) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Open Tender API key.`
    );
  }

  if (!brandId) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Open Tender brand ID.`
    );
  }

  const apiEndpoint = STAGING_HOST;
  const origin = config.origin || ORIGIN;
  const storage = config.storage || localforage;

  return new OpenTender({
    apiKey,
    brandId,
    apiEndpoint,
    origin,
    storage
  });
};
