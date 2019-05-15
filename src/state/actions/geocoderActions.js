import { fetchGeolocations } from 'brandibble-redux';
import get from 'utils/get';
import throttle from 'utils/throttle';
import { DELIVERY } from 'constants/OpenTender';

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
export const selectGeocoderFeature = (
  openTenderRef,
  feature,
  serviceType,
  setDeliveryFormAddress,
  deliveryAddressIsNotSpecificEnough
) => (dispatch, getState) =>
  dispatch({
    type: SELECT_GEOCODER_FEATURE,
    payload: new Promise((resolve, reject) => {
      if (!feature) resolve(null);

      const zipCodeObj = feature.context.find(contextItem =>
        contextItem.id.match('postcode')
      );

      if (serviceType === DELIVERY) {
        const address = {
          address: get(feature, 'meta.address', ''),
          street: get(feature, 'meta.street', ''),
          city: get(feature, 'meta.city', ''),
          state: get(feature, 'meta.state', ''),
          zip: get(zipCodeObj, 'text', '')
        };
        const mandatoryAddressFieldIsBlank = !!Object.keys(address).find(
          mandatoryAddressField => !address[mandatoryAddressField]
        );

        if (mandatoryAddressFieldIsBlank) {
          deliveryAddressIsNotSpecificEnough();
        } else {
          setDeliveryFormAddress(address);
        }
      }

      const coordinates = {
        latitude: get(feature, 'center[0]'),
        longitude: get(feature, 'center[1]')
      };

      return dispatch(
        fetchGeolocations(openTenderRef, {
          service_type: serviceType,
          ...coordinates
        })
      )
        .then(() => resolve(feature))
        .catch(reject);
    })
  });

export const CLEAR_SELECTED_GEOCODER_FEATURE =
  'CLEAR_SELECTED_GEOCODER_FEATURE';
export const clearSelectedGeocoderFeature = () => ({
  type: CLEAR_SELECTED_GEOCODER_FEATURE
});

export const FETCH_CURRENT_POSITION = 'FETCH_CURRENT_POSITION';
export const fetchCurrentPosition = () => dispatch => {
  dispatch({
    type: FETCH_CURRENT_POSITION,
    payload: new Promise((resolve, reject) => {
      if (!get(navigator, 'geolocation')) {
        return reject(new Error('Browser does not support geolocation'));
      }

      return navigator.geolocation.getCurrentPosition(resolve, reject);
    })
  });
};

export const CLEAR_USER_COORDINATES = 'CLEAR_USER_COORDINATES';
export const clearUserCoordinates = () => ({
  type: CLEAR_USER_COORDINATES
});
