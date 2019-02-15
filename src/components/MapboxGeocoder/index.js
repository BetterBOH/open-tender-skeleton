import { Component } from 'react';
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
  }

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

  state = {
    query: ''
  };

  onChange = query => {
    this.setState({ query });
    this.queryMapbox(query);
  };

  onSelect = selectedId => {
    const { actions, geocoderResultFeatures } = this.props;
    const selectedFeature = geocoderResultFeatures.find(
      feature => feature.id === selectedId
    );
    actions.selectGeocoderFeature(selectedFeature);
  };

  queryMapbox = value =>
    this.props.actions.forwardGeocode(this.Geocoder, value);

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
        onChange: this.onChange,
        onSelect: this.onSelect
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
