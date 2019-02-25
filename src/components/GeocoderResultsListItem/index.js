import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsListItem extends PureComponent {
  render() {
    const { option } = this.props;

    return RegistryLoader(
      {
        option
      },
      'components.GeocoderResultsListItem',
      () => import('./presentation.js')
    );
  }
}

export default GeocoderResultsListItem;
