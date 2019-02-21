import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class LocationsSearch extends PureComponent {
  render() {
    return RegistryLoader(this.props, 'components.LocationsSearch', () =>
      import('./presentation')
    );
  }
}

export default LocationsSearch;
