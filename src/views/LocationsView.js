import React, { PureComponent } from 'react';
import { Constants } from 'brandibble-redux';

const { PICKUP } = Constants.ServiceTypes;

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
        <div className="LocationsView__search relative z1 col-12 md:col-5 lg:col-4 bg-color-white shadow-top">
          <div className="px1 md:px1_5 pt1 md:pt1_5 pb1_5 shadow-sm bg-color-white z1 relative">
            <div className="LocationsView__pull-tab bg-color-gray-light mb1 mxauto md:none" />
            <MapboxGeocoder
              askForBrowserLocation={!userCoordinates}
              selectedServiceType={PICKUP}
            />
          </div>
          <LocationsSearchResults />
        </div>
        <div className="LocationsView__map col-12 md:col-7 lg:col-9">
          <LocationsMap
            geolocations={geolocations}
            featureCollection={filteredLocationsGeoJSON}
            userCoordinates={userCoordinates}
          />
        </div>
      </main>
    );
  }
}

export default LocationsView;
