import React from 'react';
import { MapboxMap } from 'components';

const LocationsMap = React.memo(({ mapbox }) => (
  <div className="LocationsMap col-12 md:col-7 lg:col-9 bg-color-white relative">
    <MapboxMap
      className="w100"
      mapboxApiKey={mapbox.mapboxApiKey}
      mapboxStyleUrl={mapbox.mapboxStyleUrl}
    />
  </div>
));

export default LocationsMap;
