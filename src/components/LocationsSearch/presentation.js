import React from 'react';
import { SearchableDropdown } from 'components';

const LocationsSearch = React.memo(props => (
  <div className="LocationsSearch col-12 md:col-5 lg:col-3 bg-color-white">
    <div className="LocationsSearch__geocoder">
      <SearchableDropdown />
    </div>
    <div className="LocationsSearch__locations" />
  </div>
));

export default LocationsSearch;
