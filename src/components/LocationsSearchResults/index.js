import { PureComponent } from 'react';
import { connect } from 'react-redux';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import withComponents from 'lib/withComponents';
import get from 'utils/get';

class LocationsSearchResults extends PureComponent {
  render() {
    const {
      geolocations,
      selectedGeocoderFeature,
      localesContext
    } = this.props;

    return RegistryLoader(
      {
        geolocations,
        selectedGeocoderFeature,
        localesContext
      },
      'components.LocationsSearchResults',
      () => import('./presentation')
    );
  }
}

const mapStateToProps = state => ({
  geolocations: get(state, 'openTender.data.geolocations'),
  selectedGeocoderFeature: get(state, 'geocoder.selected')
});

export default connect(mapStateToProps)(
  withComponents(withLocales(LocationsSearchResults))
);
