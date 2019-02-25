import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsListItem extends PureComponent {
  render() {
    const { option, onSelect } = this.props;

    return RegistryLoader(
      {
        option,
        onSelect
      },
      'components.GeocoderResultsListItem',
      () => import('./presentation.js')
    );
  }
}

export default GeocoderResultsListItem;
