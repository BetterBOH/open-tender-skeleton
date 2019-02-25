import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsList extends PureComponent {
  render() {
    const { options } = this.props;

    return RegistryLoader({ options }, 'components.GeocoderResultsList', () =>
      import('./presentation')
    );
  }
}

export default GeocoderResultsList;
