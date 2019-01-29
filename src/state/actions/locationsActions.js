import { fetchLocation } from 'brandibble-redux';

export const FETCH_ALL_LOCATIONS = 'FETCH_ALL_LOCATIONS';
export const fetchAllLocations = OpenTenderRef => dispatch => ({
  type: FETCH_ALL_LOCATIONS,
  payload: new Promise((resolve, reject) => {
    // const fetchLocationsByOrderType = Promise.all([
    //   dispatch(fetchLocations(OpenTenderRef, { order_type: 'olo' })),
    //   dispatch(fetchLocations(OpenTenderRef, { order_type: 'catering' }))
    // ]);

    // const timeout = new Promise((resolve, reject) => {
    //   setTimeout(() => reject('Timeout'), 10000);
    // });

    // return Promise
    //   .race([fetchLocationsByOrderType, timeout])
    //   .then(resolve)
    //   .catch(reject);
    console.log('OT REF', OpenTenderRef);
    return setTimeout(resolve, 4000);
    // return dispatch(fetchLocations(OpenTenderRef)).then(resolve)

    // return dispatch(fetchLocation(OpenTenderRef, 538)).then(resolve);
  })
});
