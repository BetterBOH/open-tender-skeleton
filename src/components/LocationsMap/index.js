import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withMapbox from 'lib/withMapbox';

class LocationsMap extends PureComponent {
  render() {
    return RegistryLoader(this.props, 'components.LocationsMap', () =>
      import('./presentation')
    );
  }
}

export default withMapbox(LocationsMap);
