import React from 'react';
import { MapboxMap } from 'components';

const LocationsMap = React.memo(({ mapbox }) => (
  <div className="LocationsMap col-12 md:col-7 lg:col-9 bg-color-white relative">
    <MapboxMap {...mapbox} />
  </div>
));

export default LocationsMap;
