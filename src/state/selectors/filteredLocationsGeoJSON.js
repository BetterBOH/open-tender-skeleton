import { createSelector } from 'reselect';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.data.geolocations'),
  geolocations => ({
    type: 'FeatureCollection',
    features: geolocations
      ? geolocations.map(location => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              get(location, 'longitude', 0),
              get(location, 'latitude', 0)
            ]
          }
        }))
      : []
  })
);
