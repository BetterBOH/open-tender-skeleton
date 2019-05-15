import { Component } from 'react';
import PropTypes from 'prop-types';
import { IDLE, PENDING, FULFILLED, REJECTED } from 'constants/Status';
import { Constants } from 'brandibble-redux';

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
import { setDeliveryFormAddress } from 'state/actions/deliveryActions';

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
    serviceType: PropTypes.string
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
    askForBrowserLocation: false,
    initialQuery: null,
    serviceType: Constants.ServiceTypes.PICKUP
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
    console.log('initialQuery', initialQuery);
    if (!this.state.query && !!initialQuery) return this.onChange(initialQuery);

    return null;
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
      console.log('fetchCurrentPositionStatus fulfilled');
      this.setState({ error: null });
      actions.fetchGeolocations(openTenderRef, {
        service_type: serviceType,
        ...userCoordinates
      });
    }
  }

  onChange = query => {
    const { actions } = this.props;
    this.setState({ query, error: null }, () => {
      console.log('query', query);
      actions.clearSelectedGeocoderFeature();
      actions.clearUserCoordinates();
    });
    return this.queryMapbox(query);
  };

  onSelect = selectedId => {
    console.log('selectedId', selectedId);
    const {
      actions,
      geocoderResultFeatures,
      openTenderRef,
      serviceType
    } = this.props;
    console.log('setDeliveryFormAddress', setDeliveryFormAddress);

    const selectedFeature = geocoderResultFeatures.find(
      feature => feature.id === selectedId
    );
    console.log('selectedFeature', selectedFeature);
    console.log('serviceType 123', serviceType);
    actions.selectGeocoderFeature(
      openTenderRef,
      selectedFeature,
      serviceType,
      get(actions, 'setDeliveryFormAddress', f => f)
    );
  };

  queryMapbox = value => {
    console.log('value', value);
    console.log('this.props.geocoder', this.props.geocoder);
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
      fetchGeolocations,
      setDeliveryFormAddress
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
