import { Brandibble } from 'brandibble-redux';
import localforage from 'localforage';

export default config => {
  const { apiKey, brandId, brandEndpoint, origin } = config;

  if (!apiKey)
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Brandibble API key.`
    );
  if (!brandId)
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Brandibble brand ID.`
    );
  if (!brandEndpoint)
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Brandibble endpoint.`
    );
  if (!origin)
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Brandibble origin.`
    );

  const storage = brandibbleConfig.storage || localforage;

  return new Brandibble({
    apiKey,
    brandId,
    brandEndpoint,
    origin,
    storage
  });
};
