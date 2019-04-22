import React, { PureComponent } from 'react';
import get from 'utils/get';
import { PICKUP } from 'constants/OpenTender';

import {
  LocationsMap,
  MapboxGeocoder,
  LocationsSearchResults,
  LocationsSuggestionsCard
} from 'components';

class LocationsView extends PureComponent {
  render() {
    const {
      filteredLocationsGeoJSON,
      orderRef,
      geolocations,
      userCoordinates
    } = this.props;

    return (
      <main className="LocationsView__container container relative flex flex-col justify-center items-center md:flex-row md:justify-start">
        <LocationsMap
          geolocations={geolocations}
          featureCollection={filteredLocationsGeoJSON}
          userCoordinates={userCoordinates}
        />
        <div className="LocationsSearch h100 overflow-y-scroll col-12 md:col-5 lg:col-3 bg-color-gray-light">
          <div className="px1 py1_5 shadow-sm z-1">
            <MapboxGeocoder />
          </div>
          <LocationsSearchResults />
        </div>
      </main>
    );
  }
}

export default LocationsView;
