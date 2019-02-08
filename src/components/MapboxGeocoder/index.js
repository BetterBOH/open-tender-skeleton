import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapboxClient from '@mapbox/mapbox-sdk';
import Geocoder from '@mapbox/mapbox-sdk/services/geocoding';

import { geocoderResultFeatures } from 'state/selectors';
import { forwardGeocode } from 'state/actions/geocoderActions';

import get from 'utils/get';
import throttle from 'utils/throttle';
import withMapbox from 'lib/withMapbox';

import RegistryLoader from 'lib/RegistryLoader';
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

  render() {
    const { geocoderResultFeatures } = this.props;

    return (
      <div>
        <Text size="body" className="text-bold">
          Mapbox Geocoder
        </Text>
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
              <Button>{feature.place_name}</Button>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

MapboxGeocoder.propTypes = {
  actions: PropTypes.shape({
    forwardGeocode: PropTypes.func
  }),
  geocoderResultFeatures: PropTypes.array
};

MapboxGeocoder.defaultProps = {
  actions: {
    forwardGeocode: f => f
  },
  geocoderResultFeatures: []
};

const mapStateToProps = state => ({
  geocoderResultFeatures: geocoderResultFeatures(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ forwardGeocode }, dispatch)
});

export default withMapbox(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapboxGeocoder)
);
