import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class LocationsSearch extends PureComponent {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return RegistryLoader({}, 'components.LocationsSearch', () =>
      import('./presentation')
    );
  }
}

export default LocationsSearch;
