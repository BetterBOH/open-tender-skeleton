import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'geocoder.results'),
  geocoderResults => {
    const features = get(geocoderResults, 'body.features', []).map(feature => {
      const address = get(feature, 'address', '');
      const street = get(feature, 'text', '');

      const context = get(feature, 'context', []);
      const cityContext = context.find(({ id }) => id.includes('place'));
      const city = get(cityContext, 'text', '');
      const stateContext = context.find(({ id }) => id.includes('region'));
      const state = get(stateContext, 'text', '');
      const countryContext = context.find(({ id }) => id.includes('country'));
      const country = get(countryContext, 'text', '');

      return {
        ...feature,
        meta: {
          address,
          street,
          city,
          state,
          country
        }
      };
    });

    return features;
  }
);
