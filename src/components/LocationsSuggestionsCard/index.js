import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { PICKUP } from 'constants/OpenTender';

class LocationsSuggestionsCard extends PureComponent {
  static propTypes = {
    serviceType: PropTypes.string
  };

  static defaultProps = {
    serviceType: PICKUP
  };

  render() {
    const { serviceType } = this.props;

    return RegistryLoader(
      {
        serviceType
      },
      'components.LocationsSuggestionsCard',
      () => import('./presentation')
    );
  }
}

export default LocationsSuggestionsCard;
