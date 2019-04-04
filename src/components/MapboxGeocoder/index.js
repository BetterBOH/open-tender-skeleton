import { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { geocoderResultFeatures } from 'state/selectors';
import {
  forwardGeocode,
  selectGeocoderFeature,
  clearSelectedGeocoderFeature,
  setCurrentPosition,
  fetchLocationsWithCurrentPosition
} from 'state/actions/geocoderActions';

import get from 'utils/get';
import withMapbox from 'lib/withMapbox';
import RegistryLoader from 'lib/RegistryLoader';

class MapboxGeocoder extends Component {
  static propTypes = {
    className: PropTypes.string,
    actions: PropTypes.shape({
      forwardGeocode: PropTypes.func,
      selectGeocoderFeature: PropTypes.func,
      clearSelectedGeocoderFeature: PropTypes.func,
      setCurrentPosition: PropTypes.func,
      fetchLocationsWithCurrentPosition: PropTypes.func
    }),
    // TO-DO: Add GeoJSON feature as a Model and add mocks here
    geocoderResultFeatures: PropTypes.array,
    selectedGeocoderFeature: PropTypes.object,
    mapboxClient: PropTypes.object,
    geocoder: PropTypes.object
  };

  static defaultProps = {
    className: '',
    actions: {
      forwardGeocode: f => f,
      selectGeocoderFeature: f => f,
      clearSelectedGeocoderFeature: f => f,
      setCurrentPosition: f => f,
      fetchLocationsWithCurrentPosition: f => f
    },
    geocoderResultFeatures: [],
    selectedGeocoderFeature: null,
    mapboxClient: null,
    geocoder: null
  };

  state = {
    query: '',
    getCurrentPositionStatus: ''
  };

  onChange = query => {
    const { actions } = this.props;
    this.setState({ query }, actions.clearSelectedGeocoderFeature);
    this.queryMapbox(query);
  };

  onSelect = selectedId => {
    const { actions, geocoderResultFeatures, openTenderRef } = this.props;
    const selectedFeature = geocoderResultFeatures.find(
      feature => feature.id === selectedId
    );
    actions.selectGeocoderFeature(openTenderRef, selectedFeature);
  };

  queryMapbox = value =>
    this.props.actions.forwardGeocode(this.props.geocoder, value);

  getAndSetCurrentPosition = () => {
    const success = position => {
      const { actions, openTenderRef } = this.props;
      const currentLatitude = position.coords.latitude;
      const currentLongitude = position.coords.longitude;

      this.setState({ getCurrentPositionStatus: '' });
      actions.setCurrentPosition(currentLatitude, currentLongitude);
      actions.fetchLocationsWithCurrentPosition(
        openTenderRef,
        currentLatitude,
        currentLongitude
      );
    };

    const error = () => {
      this.setState({
        getCurrentPositionStatus: 'Unable to retrieve your location'
      });
    };

    if (!navigator.geolocation) {
      this.setState({
        getCurrentPositionStatus: 'Geolocation is not supported by your browser'
      });
    } else {
      this.setState({ getCurrentPositionStatus: 'Locating...' });
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  render() {
    const {
      className,
      actions,
      geocoderResultFeatures,
      selectedGeocoderFeature
    } = this.props;

    return RegistryLoader(
      {
        className,
        actions,
        geocoderResultFeatures,
        selectedGeocoderFeature,
        query: this.state.query,
        onChange: this.onChange,
        onSelect: this.onSelect,
        getAndSetCurrentPosition: this.getAndSetCurrentPosition,
        getCurrentPositionStatus: this.state.getCurrentPositionStatus
      },
      'components.MapboxGeocoder',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  selectedGeocoderFeature: get(state, 'geocoder.selected'),
  geocoderResultFeatures: geocoderResultFeatures(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      forwardGeocode,
      selectGeocoderFeature,
      clearSelectedGeocoderFeature,
      setCurrentPosition,
      fetchLocationsWithCurrentPosition
    },
    dispatch
  )
});

export default withMapbox(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapboxGeocoder)
);
