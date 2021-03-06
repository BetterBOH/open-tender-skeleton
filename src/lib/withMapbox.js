import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapboxContext } from 'config';
import { MapboxContext as MockContext } from 'tests/mocks/config';
import environmentIsMock from 'utils/environmentIsMock';

import MapboxClient from '@mapbox/mapbox-sdk';
import Geocoder from '@mapbox/mapbox-sdk/services/geocoding';

import get from 'utils/get';

let mapboxCache = {
  mapboxClient: null,
  geocoder: null
};

const createMapboxClient = context => {
  const accessToken = get(context, 'mapboxApiKey');
  if (!accessToken)
    throw new Error(
      `Open Tender Skeleton: You must provide a valid Mapbox API key`
    );

  const client = MapboxClient({ accessToken });

  mapboxCache.mapboxClient = client;
  return mapboxCache.mapboxClient;
};

const createGeocoder = () => {
  if (!mapboxCache.mapboxClient) return null;

  const geocoder = Geocoder(mapboxCache.mapboxClient);

  mapboxCache.geocoder = geocoder;
  return mapboxCache.geocoder;
};

const withMapbox = WrappedComponent => {
  class ComponentWithMapbox extends Component {
    static propTypes = {
      mapbox: PropTypes.shape({
        icons: PropTypes.object,
        mapboxApiKey: PropTypes.string,
        mapboxStyleUrl: PropTypes.string
      }),
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      mapbox: {
        icons: null,
        mapboxApiKey: '',
        mapboxStyleUrl: ''
      },
      ...WrappedComponent.defaultProps
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const Context = environmentIsMock() ? MockContext : MapboxContext;

  return React.memo(props => (
    <Context.Consumer>
      {context => {
        if (!mapboxCache.client) createMapboxClient(context);
        if (!mapboxCache.geocoder) createGeocoder();

        return (
          <ComponentWithMapbox {...props} {...mapboxCache} mapbox={context} />
        );
      }}
    </Context.Consumer>
  ));
};

export default withMapbox;
