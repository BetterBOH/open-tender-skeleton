import React from 'react';
import { MapboxGeocoder } from 'components';

const LocationsSearchGeocoder = React.memo(() => {
  return (
    <div className="LocationsSearchGeocoder px1 py1_5 shadow-sm z-1">
      <MapboxGeocoder />
    </div>
  );
});

export default LocationsSearchGeocoder;
