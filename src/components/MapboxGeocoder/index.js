import { Component } from 'react';
import PropTypes from 'prop-types';
import { Constants, Status } from 'brandibble-redux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGeolocations } from 'brandibble-redux';

import { geocoderResultFeatures } from 'state/selectors';
import {
  forwardGeocode,
  selectGeocoderFeature,
  clearSelectedGeocoderFeature,
  clearUserCoordinates,
  fetchCurrentPosition
} from 'state/actions/geocoderActions';
import {
  setDeliveryFormAddress,
  deliveryAddressIsNotSpecificEnough
} from 'state/actions/deliveryActions';

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
    askForBrowserLocation: PropTypes.bool,
    initialQuery: PropTypes.string,
    selectedServiceType: PropTypes.string
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
    fetchCurrentPositionStatus: Status.IDLE,
    askForBrowserLocation: false,
    initialQuery: null,
    selectedServiceType: Constants.ServiceTypes.PICKUP
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      query: '',
      error: null
    };

    this.Language = get(props, 'localesContext.Language');
  }

  componentDidMount() {
    const { initialQuery } = this.props;

    if (!this.state.query && !!initialQuery) return this.onChange(initialQuery);

    return null;
  }

  componentDidUpdate(prevProps) {
    const {
      actions,
      openTenderRef,
      selectedServiceType,
      userCoordinates
    } = this.props;
    if (
      prevProps.fetchCurrentPositionStatus === Status.PENDING &&
      this.props.fetchCurrentPositionStatus === Status.REJECTED
    ) {
      this.setState({ error: this.Language.t('locations.cannotLocate') });
    }

    if (
      prevProps.fetchCurrentPositionStatus === Status.PENDING &&
      this.props.fetchCurrentPositionStatus === Status.FULFILLED
    ) {
      this.setState({ error: null });
      actions.fetchGeolocations(openTenderRef, {
        service_type: selectedServiceType,
        ...userCoordinates
      });
    }

    if (
      !prevProps.deliveryAddressIsNotSpecificEnough &&
      this.props.deliveryAddressIsNotSpecificEnough
    ) {
      this.setState({
        error: this.Language.t('delivery.addressNotSpecificEnough')
      });
    }
  }

  onChange = query => {
    const { actions } = this.props;
    this.setState({ query, error: null }, () => {
      actions.clearSelectedGeocoderFeature();
      actions.clearUserCoordinates();
    });
    return this.queryMapbox(query);
  };

  onSelect = selectedId => {
    const {
      actions,
      geocoderResultFeatures,
      openTenderRef,
      selectedServiceType
    } = this.props;

    const selectedFeature = geocoderResultFeatures.find(
      feature => feature.id === selectedId
    );

    actions.selectGeocoderFeature(
      openTenderRef,
      selectedFeature,
      selectedServiceType,
      get(actions, 'setDeliveryFormAddress', f => f),
      get(actions, 'deliveryAddressIsNotSpecificEnough', f => f)
    );
  };

  queryMapbox = value => {
    this.props.actions.forwardGeocode(this.props.geocoder, value);
  };

  render() {
    const {
      className,
      actions,
      geocoderResultFeatures,
      selectedGeocoderFeature,
      fetchCurrentPositionStatus,
      askForBrowserLocation
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
  fetchCurrentPositionStatus: get(state, 'status.fetchCurrentPosition'),
  deliveryAddressIsNotSpecificEnough: get(
    state,
    'delivery.deliveryAddressIsNotSpecificEnough'
  )
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      forwardGeocode,
      selectGeocoderFeature,
      clearSelectedGeocoderFeature,
      clearUserCoordinates,
      fetchCurrentPosition,
      fetchGeolocations,
      setDeliveryFormAddress,
      deliveryAddressIsNotSpecificEnough
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
