export const FORWARD_GEOCODE = 'FORWARD_GEOCODE';
export const forwardGeocode = (client, query) => dispatch =>
  dispatch({
    type: FORWARD_GEOCODE,
    payload: new Promise(resolve => {
      return query
        ? client
            .forwardGeocode({ query })
            .send()
            .then(resolve)
        : resolve({});
    })
  });

export const SELECT_GEOCODER_FEATURE = 'SELECT_GEOCODER_FEATURE';
export const selectGeocoderFeature = feature => ({
  type: SELECT_GEOCODER_FEATURE,
  payload: feature
});
