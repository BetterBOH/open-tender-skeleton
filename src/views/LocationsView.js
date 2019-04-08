import React, { PureComponent } from 'react';
import get from 'utils/get';
import { PICKUP } from 'constants/OpenTender';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import {
  LocationsMap,
  MapboxGeocoder,
  LocationsSearchResults,
  LocationsSuggestionsCard
} from 'components';

class LocationsView extends PureComponent {
  render() {
    const { filteredLocationsGeoJSON, orderRef, geolocations } = this.props;

    console.log('VEW', geolocations, filteredLocationsGeoJSON);

    return (
      <main className="LocationsView__container container relative flex flex-col justify-center items-center md:flex-row md:justify-start">
        {!!geolocations && geolocations.length ? (
          <React.Fragment>
            <LocationsMap
              geolocations={geolocations}
              featureCollection={filteredLocationsGeoJSON}
            />
            <div className="LocationsSearch h100 overflow-y-scroll col-12 md:col-5 lg:col-3 bg-color-gray-light">
              <div className="px1 py1_5 shadow-sm z-1">
                <MapboxGeocoder />
              </div>
              <LocationsSearchResults />
            </div>
          </React.Fragment>
        ) : (
          <div className="col-12 md:col-6 lg:col-4 md:ml4 p1">
            <div className="relative overflow-auto my2">
              <LocationsSuggestionsCard
                serviceType={get(orderRef, 'serviceType', PICKUP)}
              />
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default withComponents(withLocales(LocationsView));
