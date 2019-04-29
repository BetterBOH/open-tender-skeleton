import React, { PureComponent } from 'react';

import {
  LocationsMap,
  MapboxGeocoder,
  LocationsSearchResults
} from 'components';

class LocationsView extends PureComponent {
  render() {
    const {
      filteredLocationsGeoJSON,
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
          <div className="px1 py1_5 shadow-sm">
            <MapboxGeocoder askForBrowserLocation={!userCoordinates} />
          </div>
          <LocationsSearchResults />
        </div>
      </main>
    );
  }
}

export default LocationsView;
