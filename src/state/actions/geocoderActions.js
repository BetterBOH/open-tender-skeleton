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
