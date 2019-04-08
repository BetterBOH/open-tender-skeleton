import { createSelector } from 'reselect';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.data.geolocations'),
  geolocations => ({
    type: 'FeatureCollection',
    features: geolocations
      ? geolocations.map(geolocation => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              get(geolocation, 'longitude', 0),
              get(geolocation, 'latitude', 0)
            ]
          },
          properties: {
            id: geolocation.location_id.toString()
          }
        }))
      : []
  })
);
