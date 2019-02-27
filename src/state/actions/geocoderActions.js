import { fetchGeolocations } from 'brandibble-redux';
import get from 'utils/get';
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
export const selectGeocoderFeature = (ref, feature) => (dispatch, getState) =>
  dispatch({
    type: SELECT_GEOCODER_FEATURE,
    payload: new Promise((resolve, reject) => {
      if (!feature) resolve(null);

      const { service_type } = getState().openTender.session.order.orderData;
      const coordinates = {
        latitude: get(feature, 'center[0]'),
        longitude: get(feature, 'center[1]')
      };

      return dispatch(fetchGeolocations(ref, { service_type, ...coordinates }))
        .then(() => resolve(feature))
        .catch(reject);
    })
  });

export const CLEAR_SELECTED_GEOCODER_FEATURE =
  'CLEAR_SELECTED_GEOCODER_FEATURE';
export const clearSelectedGeocoderFeature = () => ({
  type: CLEAR_SELECTED_GEOCODER_FEATURE
});
