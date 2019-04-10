import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { PICKUP } from 'constants/OpenTender';

class LocationsSuggestionsCard extends PureComponent {
  static propTypes = {
    serviceTypeIsPickup: PropTypes.bool
  };

  static defaultProps = {
    serviceType: true
  };

  render() {
    const { serviceType } = this.props;

    return RegistryLoader(
      {
        serviceTypeIsPickup: serviceType === PICKUP
      },
      'components.LocationsSuggestionsCard',
      () => import('./presentation')
    );
  }
}

export default LocationsSuggestionsCard;
