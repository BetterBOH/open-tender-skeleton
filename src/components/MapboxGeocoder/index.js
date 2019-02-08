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
import throttle from 'utils/throttle';
import withMapbox from 'lib/withMapbox';

import { Text, Button } from 'components';

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

  queryMapbox = value =>
    this.props.actions.forwardGeocode(this.Geocoder, value);

  // TO-DO: Use RegistryLoader to pass real component
  render() {
    const {
      geocoderResultFeatures,
      actions,
      selectedGeocoderFeature
    } = this.props;

    return (
      <div>
        <Text size="body" className="text-bold">
          Mapbox Geocoder
        </Text>
        {selectedGeocoderFeature ? (
          <Text size="details">
            SELECTED: {selectedGeocoderFeature.place_name}
          </Text>
        ) : null}
        <div className="mt1">
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.query}
          />
        </div>
        {geocoderResultFeatures.length ? (
          <div className="mb1">
            {geocoderResultFeatures.map(feature => (
              <Button
                key={feature.id}
                onClick={() => actions.selectGeocoderFeature(feature)}
              >
                {feature.place_name}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

MapboxGeocoder.propTypes = {
  actions: PropTypes.shape({
    forwardGeocode: PropTypes.func,
    selectGeocoderFeature: PropTypes.func
  }),
  // TO-DO: Add GeoJSON feature as a Model and add mocks here
  geocoderResultFeatures: PropTypes.array,
  selectedGeocoderFeature: PropTypes.object
};

MapboxGeocoder.defaultProps = {
  actions: {
    forwardGeocode: f => f,
    selectGeocoderFeature: f => f
  },
  geocoderResultFeatures: [],
  selectedGeocoderFeature: null
};

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
