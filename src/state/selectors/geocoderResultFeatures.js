import { createSelector } from 'reselect';
import get from 'utils/get';

export default createSelector(
  state => get(state, 'geocoder.results'),
  geocoderResults => {
    const features = get(geocoderResults, 'body.features');

    return features;
  }
);
