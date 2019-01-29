import { fetchLocations } from 'brandibble-redux';

export const FETCH_ALL_LOCATIONS = 'FETCH_ALL_LOCATIONS';
export const fetchAllLocations = OpenTenderRef => dispatch =>
  dispatch({
    type: FETCH_ALL_LOCATIONS,
    payload: new Promise((resolve, reject) => {
      const fetchLocationsByOrderType = Promise.all([
        dispatch(fetchLocations(OpenTenderRef, { order_type: 'olo' })),
        dispatch(fetchLocations(OpenTenderRef, { order_type: 'catering' }))
      ]);

      const timeout = new Promise(() => {
        setTimeout(() => reject('Timeout'), 10000);
      });

      return Promise.race([fetchLocationsByOrderType, timeout])
        .then(resolve)
        .catch(reject);
    })
  });
