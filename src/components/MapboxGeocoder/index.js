import React, { Component } from 'react';
import MapboxClient from '@mapbox/mapbox-sdk';
import Geocoder from '@mapbox/mapbox-sdk/services/geocoding';

import get from 'utils/get';
import throttle from 'utils/throttle';
import withMapbox from 'lib/withMapbox';

import RegistryLoader from 'lib/RegistryLoader';
import { Text } from 'components';

class MapboxGeocoder extends Component {
  constructor(props) {
    super(...arguments);

    const accessToken = get(props, 'mapbox.mapboxApiKey', '');

    this.queryMapbox = throttle(this.queryMapbox, 500);

    this.Client = MapboxClient({ accessToken });
    this.Geocoder = Geocoder(this.Client);
  }

  state = {
    query: '',
    results: []
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ query: e.target.value });
    this.queryMapbox(value);
  };

  queryMapbox = value => console.log(value);

  render() {
    return (
      <div>
        <Text size="body" className="text-bold">
          Mapbox Geocoder
        </Text>
        <div className="my1">
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.query}
          />
        </div>
      </div>
    );
  }
}

export default withMapbox(MapboxGeocoder);
