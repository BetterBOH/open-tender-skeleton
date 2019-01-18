import { Brandibble as OpenTender } from 'brandibble-redux';
import localforage from 'localforage';
import get from 'utils/get';

export default config => {
  if (!get(config, 'apiKey')) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Open Tender API key.`
    );
  }

  if (!get(config, 'brandId')) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Open Tender brand ID.`
    );
  }

  if (!get(config, 'origin')) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Open Tender origin.`
    );
  }

  if (!get(config, 'apiEndpoint')) {
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Open Tender API endpoint host.`
    );
  }

  const { apiKey, brandId, origin, apiEndpoint } = config;
  const storage = get(config, 'storage') || localforage;

  return new OpenTender({
    apiKey,
    brandId,
    apiEndpoint,
    origin,
    storage
  });
};
