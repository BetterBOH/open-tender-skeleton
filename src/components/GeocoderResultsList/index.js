import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class GeocoderResultsList extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    options: [],
    onSelect: f => f
  };

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
