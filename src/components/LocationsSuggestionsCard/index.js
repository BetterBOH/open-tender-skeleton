import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import { PICKUP } from 'constants/OpenTender';
import GeoJSONFeatureModel from 'constants/Models/GeoJSONFeatureModel';

class LocationsSuggestionsCard extends PureComponent {
  static propTypes = {
    serviceType: PropTypes.string,
    selectedGeocoderFeature: GeoJSONFeatureModel.propTypes
  };

  static defaultProps = {
    serviceType: PICKUP,
    selectedGeocoderFeature: GeoJSONFeatureModel.defaultProps
  };

  render() {
    const { serviceType, selectedGeocoderFeature } = this.props;

    return RegistryLoader(
      {
        serviceType,
        selectedGeocoderFeature
      },
      'components.LocationsSuggestionsCard',
      () => import('./presentation')
    );
  }
}

export default LocationsSuggestionsCard;
