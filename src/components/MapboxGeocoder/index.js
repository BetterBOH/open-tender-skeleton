import { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { geocoderResultFeatures } from 'state/selectors';
import {
  forwardGeocode,
  selectGeocoderFeature,
  clearSelectedGeocoderFeature
} from 'state/actions/geocoderActions';

import get from 'utils/get';
import withMapbox from 'lib/withMapbox';
import RegistryLoader from 'lib/RegistryLoader';

class MapboxGeocoder extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      forwardGeocode: PropTypes.func,
      selectGeocoderFeature: PropTypes.func,
      clearSelectedGeocoderFeature: PropTypes.func
    }),
    // TO-DO: Add GeoJSON feature as a Model and add mocks here
    geocoderResultFeatures: PropTypes.array,
    selectedGeocoderFeature: PropTypes.object,
    mapboxClient: PropTypes.object,
    geocoder: PropTypes.object
  };

  static defaultProps = {
    actions: {
      forwardGeocode: f => f,
      selectGeocoderFeature: f => f,
      clearSelectedGeocoderFeature: f => f
    },
    geocoderResultFeatures: [],
    selectedGeocoderFeature: null,
    mapboxClient: null,
    geocoder: null
  };

  state = {
    query: ''
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
  openTenderRef: get(state, 'openTender.ref'),
  selectedGeocoderFeature: get(state, 'geocoder.selected'),
  geocoderResultFeatures: geocoderResultFeatures(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { forwardGeocode, selectGeocoderFeature, clearSelectedGeocoderFeature },
    dispatch
  )
});

export default withMapbox(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapboxGeocoder)
);
