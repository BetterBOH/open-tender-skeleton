import React from 'react';
import { MapboxGeocoder } from 'components';

const LocationsSearch = React.memo(() => (
  <div className="LocationsSearch col-12 md:col-5 lg:col-3 bg-color-gray-light">
    <div className="LocationsSearch__geocoder p1">
      <MapboxGeocoder />
    </div>
    <div className="LocationsSearch__locations" />
  </div>
));

export default LocationsSearch;
