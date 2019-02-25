import throttle from 'utils/throttle';

export const FORWARD_GEOCODE = 'FORWARD_GEOCODE';
export const forwardGeocode = throttle(
  (client, query) => dispatch =>
    dispatch({
      type: FORWARD_GEOCODE,
      payload: new Promise(resolve => {
        return query
          ? client
              .forwardGeocode({
                query,
                types: ['address'],
                countries: ['US'],
                autocomplete: true
              })
              .send()
              .then(resolve)
          : resolve({});
      })
    }),
  500
);

export const SELECT_GEOCODER_FEATURE = 'SELECT_GEOCODER_FEATURE';
export const selectGeocoderFeature = feature => ({
  type: SELECT_GEOCODER_FEATURE,
  payload: feature
});
