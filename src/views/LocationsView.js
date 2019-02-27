import React, { PureComponent } from 'react';

import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { LocationsMap, LocationsSearch } from 'components';

class LocationsView extends PureComponent {
  render() {
    return (
      <main className="container relative">
        <div className="flex flex-wrap flex-row-reverse">
          <LocationsMap
            featureCollection={this.props.filteredLocationsGeoJSON}
          />
          <LocationsSearch
            selectedGeocoderFeature={this.props.selectedGeocoderFeature}
            geolocations={this.props.geolocations}
          />
        </div>
      </main>
    );
  }
}

export default withComponents(withLocales(LocationsView));
