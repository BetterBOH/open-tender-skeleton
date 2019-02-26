import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsListItem extends PureComponent {
  static propTypes = {
    option: PropTypes.object,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    option: {},
    onSelect: f => f
  };

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
