import { Component } from 'react';
import PropTypes from 'prop-types';
import { IDLE, PENDING, FULFILLED, REJECTED } from 'constants/Status';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { geocoderResultFeatures } from 'state/selectors';
import {
  forwardGeocode,
  selectGeocoderFeature,
  clearSelectedGeocoderFeature,
  clearUserCoordinates,
  fetchCurrentPosition
} from 'state/actions/geocoderActions';
import { fetchGeolocations } from 'brandibble-redux';

import get from 'utils/get';
import withMapbox from 'lib/withMapbox';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';

class MapboxGeocoder extends Component {
  static propTypes = {
    className: PropTypes.string,
    actions: PropTypes.shape({
      forwardGeocode: PropTypes.func,
      selectGeocoderFeature: PropTypes.func,
      clearSelectedGeocoderFeature: PropTypes.func,
      clearUserCoordinates: PropTypes.func,
      fetchCurrentPosition: PropTypes.func,
      fetchGeolocations: PropTypes.func
    }),
    // TO-DO: Add GeoJSON feature as a Model
    geocoderResultFeatures: PropTypes.array,
    selectedGeocoderFeature: PropTypes.object,
    mapboxClient: PropTypes.object,
    geocoder: PropTypes.object,
    fetchCurrentPositionStatus: PropTypes.string,
    askForBrowserLocation: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    actions: {
      forwardGeocode: f => f,
      selectGeocoderFeature: f => f,
      clearSelectedGeocoderFeature: f => f,
      clearUserCoordinates: f => f,
      fetchCurrentPosition: f => f,
      fetchGeolocations: f => f
    },
    geocoderResultFeatures: [],
    selectedGeocoderFeature: null,
    mapboxClient: null,
    geocoder: null,
    fetchCurrentPositionStatus: IDLE,
    askForBrowserLocation: false
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      query: '',
      error: null
    };

    this.Language = get(props, 'localesContext.Language');
  }

  componentDidUpdate(prevProps) {
    const { actions, openTenderRef, serviceType, userCoordinates } = this.props;
    if (
      prevProps.fetchCurrentPositionStatus === PENDING &&
      this.props.fetchCurrentPositionStatus === REJECTED
    ) {
      this.setState({ error: this.Language.t('locations.cannotLocate') });
    }

    if (
      prevProps.fetchCurrentPositionStatus === PENDING &&
      this.props.fetchCurrentPositionStatus === FULFILLED
    ) {
      this.setState({ error: null });
      actions.fetchGeolocations(openTenderRef, {
        service_type: serviceType,
        ...userCoordinates
      });
    }
  }

  onChange = query => {
    const { actions } = this.props;
    this.setState({ query }, () => {
      actions.clearSelectedGeocoderFeature();
      actions.clearUserCoordinates();
    });
    return this.queryMapbox(query);
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

  render() {
    const {
      className,
      actions,
      geocoderResultFeatures,
      selectedGeocoderFeature,
      fetchCurrentPositionStatus,
      askForBrowserLocation
    } = this.props;

    console.log(askForBrowserLocation);

    return RegistryLoader(
      {
        className,
        actions,
        geocoderResultFeatures,
        selectedGeocoderFeature,
        query: this.state.query,
        onChange: this.onChange,
        onSelect: this.onSelect,
        fetchCurrentPositionStatus,
        fetchCurrentPositionError: this.state.error,
        askForBrowserLocation
      },
      'components.MapboxGeocoder',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  selectedGeocoderFeature: get(state, 'geocoder.selected'),
  geocoderResultFeatures: geocoderResultFeatures(state),
  userCoordinates: get(state, 'geocoder.userCoordinates'),
  serviceType: get(state, 'openTender.session.order.orderData.service_type'),
  fetchCurrentPositionStatus: get(state, 'status.fetchCurrentPosition')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      forwardGeocode,
      selectGeocoderFeature,
      clearSelectedGeocoderFeature,
      clearUserCoordinates,
      fetchCurrentPosition,
      fetchGeolocations
    },
    dispatch
  )
});

export default withMapbox(
  withLocales(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(MapboxGeocoder)
  )
);
