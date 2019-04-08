import { createSelector } from 'reselect';

import get from 'utils/get';

export default createSelector(
  state => get(state, 'openTender.data.geolocations'),
  state => get(state, 'geocoder.userCoordinates'),
  (geolocations, userCoordinates) => {
    const features = geolocations
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
      : [];

    const userLongitude = get(userCoordinates, 'longitude');
    const userLatitude = get(userCoordinates, 'latitude');

    if (userLatitude && userLongitude)
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [userLongitude, userLatitude]
        },
        properties: {
          id: 'user'
        }
      });

    return {
      type: 'FeatureCollection',
      features
    };
  }
);
