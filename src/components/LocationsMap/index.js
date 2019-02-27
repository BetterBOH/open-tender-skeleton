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
    })
  };

  static defaultProps = {
    mapbox: {
      mapboxApiKey: '',
      mapboxStyleUrl: ''
    },
    featuresCollection: {
      features: []
    }
  };

  render() {
    const { mapbox, featureCollection } = this.props;

    return RegistryLoader(
      { mapbox, featureCollection },
      'components.LocationsMap',
      () => import('./presentation')
    );
  }
}

export default withMapbox(LocationsMap);
