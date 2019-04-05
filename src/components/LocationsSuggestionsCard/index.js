import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { PICKUP } from 'constants/OpenTender';

import withLocales from 'lib/withLocales';

class LocationsSuggestionsCard extends PureComponent {
  static propTypes = {
    serviceTypeIsPickup: PropTypes.bool
  };

  static defaultProps = {
    serviceType: true
  };

  render() {
    const { serviceType, localesContext } = this.props;

    return RegistryLoader(
      {
        serviceTypeIsPickup: serviceType === PICKUP,
        localesContext
      },
      'components.LocationsSuggestionsCard',
      () => import('./presentation')
    );
  }
}

export default withLocales(LocationsSuggestionsCard);
