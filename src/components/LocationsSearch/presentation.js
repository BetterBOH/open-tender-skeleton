import React from 'react';
import { LocationsSearchResults, MapboxGeocoder } from 'components';

const LocationsSearch = React.memo(
  ({ selectedGeocoderFeature, geolocations, onSelect, localesContext }) => {
    return (
      <div className="LocationsSearch col-12 md:col-5 lg:col-3 bg-color-gray-light">
        <div className="LocationsSearch__geocoder px1 py1_5 shadow-sm z-1 relative">
          <MapboxGeocoder />
        </div>
        <div className="LocationsSearch__locations h100">
          <LocationsSearchResults />
        </div>
      </div>
    );
  }
);

export default LocationsSearch;
