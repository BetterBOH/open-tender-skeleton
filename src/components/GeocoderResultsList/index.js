import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsList extends PureComponent {
  render() {
    const { options, onSelect } = this.props;

    return RegistryLoader(
      { options, onSelect },
      'components.GeocoderResultsList',
      () => import('./presentation')
    );
  }
}

export default GeocoderResultsList;
