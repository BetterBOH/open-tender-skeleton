import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapboxClient from '@mapbox/mapbox-sdk';
import Geocoder from '@mapbox/mapbox-sdk/services/geocoding';

import { geocoderResultFeatures } from 'state/selectors';
import {
  forwardGeocode,
  selectGeocoderFeature
} from 'state/actions/geocoderActions';

import get from 'utils/get';
import withMapbox from 'lib/withMapbox';
import RegistryLoader from 'lib/RegistryLoader';

import { Text, Button } from 'components';
import RegistryLoader from '../../lib/RegistryLoader';

class MapboxGeocoder extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      forwardGeocode: PropTypes.func,
      selectGeocoderFeature: PropTypes.func
    }),
    // TO-DO: Add GeoJSON feature as a Model and add mocks here
    geocoderResultFeatures: PropTypes.array,
    selectedGeocoderFeature: PropTypes.object
  };

  static defaultProps = {
    actions: {
      forwardGeocode: f => f,
      selectGeocoderFeature: f => f
    },
    geocoderResultFeatures: [],
    selectedGeocoderFeature: null
  };

  constructor(props) {
    super(...arguments);

    this.Client = MapboxClient({
      accessToken: get(props, 'mapbox.mapboxApiKey')
    });
    this.Geocoder = Geocoder(this.Client);

    this.state = {
      query: ''
    };
  }

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ query: e.target.value });
    this.props.actions.forwardGeocode(this.Geocoder, value);
  };

  // TO-DO: Use RegistryLoader to pass real component
  render() {
    const {
      geocoderResultFeatures,
      actions,
      selectedGeocoderFeature
    } = this.props;

    return RegistryLoader(
      {
        actions,
        geocoderResultFeatures,
        selectedGeocoderFeature,
        query: this.state.query,
        handleOnChange: this.handleOnChange
      },
      'components.MapboxGeocoder',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  selectedGeocoderFeature: get(state, 'geocoder.selected'),
  geocoderResultFeatures: geocoderResultFeatures(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { forwardGeocode, selectGeocoderFeature },
    dispatch
  )
});

export default withMapbox(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapboxGeocoder)
);
