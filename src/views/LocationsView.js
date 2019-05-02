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
      <main className="LocationsView container relative flex flex-col justify-center items-center md:flex-row md:justify-start overflow-auto">
        <LocationsMap
          geolocations={geolocations}
          featureCollection={filteredLocationsGeoJSON}
          userCoordinates={userCoordinates}
        />
        <div className="LocationsView__search h100 relative z1 col-12 md:col-5 lg:col-3 bg-color-white shadow-top">
          <div className="px1 py1_5 shadow-sm bg-color-white z1 relative">
            <MapboxGeocoder askForBrowserLocation={!userCoordinates} />
          </div>
          <LocationsSearchResults />
        </div>
      </main>
    );
  }
}

export default LocationsView;
