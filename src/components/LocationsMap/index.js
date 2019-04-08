import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withMapbox from 'lib/withMapbox';

class LocationsMap extends PureComponent {
  static propTypes = {
    mapbox: PropTypes.shape({
      mapboxApiKey: PropTypes.string,
      mapboxStyleUrl: PropTypes.string
    }),
    featureCollection: PropTypes.shape({
      features: PropTypes.array
    }),
    geolocations: PropTypes.array,
    selectedLocation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    filteredOutLocations: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    userCoordinates: PropTypes.shape({
      longitude: PropTypes.number,
      latitude: PropTypes.number
    })
  };

  static defaultProps = {
    mapbox: {
      mapboxApiKey: '',
      mapboxStyleUrl: ''
    },
    featuresCollection: {
      features: []
    },
    geolocations: [],
    selectLocation: null,
    filteredOutLocations: [],
    userCoordinates: null
  };

  render() {
    const {
      mapbox,
      featureCollection,
      geolocations,
      selectedLocation,
      filteredOutLocations,
      userCoordinates
    } = this.props;

    return RegistryLoader(
      {
        mapbox,
        featureCollection,
        geolocations,
        selectedLocation,
        filteredOutLocations,
        userCoordinates
      },
      'components.LocationsMap',
      () => import('./presentation')
    );
  }
}

export default withMapbox(LocationsMap);
