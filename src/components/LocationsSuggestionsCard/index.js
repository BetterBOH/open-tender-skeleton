import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import LocationModel from 'constants/Models/LocationModel';
import { PICKUP } from 'constants/OpenTender';

import withLocales from 'lib/withLocales';

class LocationsSuggestionsCard extends PureComponent {
  static propTypes = {
    // TO-DO: Add GeoJSON feature as a Model and add mocks here
    selectedGeocoderFeature: PropTypes.object,
    geolocations: PropTypes.arrayOf(LocationModel.propTypes),
    serviceTypeIsPickup: PropTypes.bool
  };

  static defaultProps = {
    selectedGeocoderFeature: {},
    geolocations: [],
    serviceTypeIsPickup: true
  };

  render() {
    const {
      selectedGeocoderFeature,
      geolocations,
      serviceType,
      localesContext
    } = this.props;

    return RegistryLoader(
      {
        selectedGeocoderFeature,
        geolocations,
        serviceTypeIsPickup: serviceType === PICKUP,
        localesContext
      },
      'components.LocationsSuggestionsCard',
      () => import('./presentation')
    );
  }
}

export default withLocales(LocationsSuggestionsCard);
