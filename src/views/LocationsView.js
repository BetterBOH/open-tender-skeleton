import React, { PureComponent } from 'react';
import get from 'utils/get';
import { PICKUP } from 'constants/OpenTender';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import {
  DashboardOrderSummary,
  LocationsMap,
  LocationsSearchGeocoder,
  LocationsSearchResults,
  LocationsSuggestionsCard
} from 'components';

class LocationsView extends PureComponent {
  render() {
    const {
      filteredLocationsGeoJSON,
      orderRef,
      selectedGeocoderFeature,
      geolocations
    } = this.props;

    return (
      <main className="LocationsView__container container relative flex items-center">
        <DashboardOrderSummary />
        {!!geolocations.length ? (
          <div className="LocationsSearch overflow-y-scroll col-12 md:col-5 lg:col-3 bg-color-gray-light">
            <LocationsSearchGeocoder
              selectedGeocoderFeature={selectedGeocoderFeature}
              geolocations={geolocations}
            />
            <LocationsSearchResults />
          </div>
        ) : (
          <div className="col-12 md:col-6 lg:col-4 md:ml4 p1">
            <div className="relative overflow-auto px1 py2 md:pl3">
              <LocationsSuggestionsCard
                serviceType={get(orderRef, 'serviceType', PICKUP)}
                selectedGeocoderFeature={selectedGeocoderFeature}
                geolocations={geolocations}
              />
            </div>
          </div>
        )}
        <LocationsMap
          geolocations={geolocations}
          featureCollection={filteredLocationsGeoJSON}
        />
      </main>
    );
  }
}

export default withComponents(withLocales(LocationsView));
