import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withMapbox from 'lib/withMapbox';

class LocationsMap extends PureComponent {
  static propTypes = {
    mapbox: PropTypes.shape({
      mapboxApiKey: PropTypes.string,
      mapboxStyleUrl: PropTypes.string
    })
  };

  static defaultProps = {
    mapbox: {
      mapboxApiKey: '',
      mapboxStyleUrl: ''
    }
  };

  render() {
    return RegistryLoader(
      { mapbox: this.props.mapbox },
      'components.LocationsMap',
      () => import('./presentation')
    );
  }
}

export default withMapbox(LocationsMap);
