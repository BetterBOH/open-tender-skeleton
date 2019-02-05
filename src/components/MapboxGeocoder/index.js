import React, { Component } from 'react';
import MapboxClient from '@mapbox/mapbox-sdk';
import Geocoder from '@mapbox/mapbox-sdk/services/geocoding';

import get from 'utils/get';
import withMapbox from 'lib/withMapbox';

import RegistryLoader from 'lib/RegistryLoader';

class MapboxGeocoder extends Component {
  constructor(props) {
    super(...arguments);

    const accessToken = get(props, 'mapbox.mapboxApiKey', '');

    this.Client = MapboxClient({ accessToken });
    this.Geocoder = Geocoder(this.Client);
  }

  render() {
    return <div>Mapbox Geo</div>;
  }
}

export default withMapbox(MapboxGeocoder);
