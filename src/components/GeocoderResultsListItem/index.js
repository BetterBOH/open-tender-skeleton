import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsListItem extends PureComponent {
  render() {
    const { option } = this.props;
    console.log('zinggg', option);

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
