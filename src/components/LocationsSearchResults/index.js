import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import withComponents from 'lib/withComponents';
import get from 'utils/get';

class LocationsSearchResults extends PureComponent {
  onSelect = location => {
    const { location_id, slug } = location;

    this.props.history.push(`/menus/${location_id}-${slug}`);
  };

  render() {
    const {
      geolocations,
      selectedGeocoderFeature,
      currentPosition,
      localesContext
    } = this.props;

    return RegistryLoader(
      {
        geolocations,
        selectedGeocoderFeature,
        currentPosition,
        localesContext,
        onSelect: this.onSelect
      },
      'components.LocationsSearchResults',
      () => import('./presentation')
    );
  }
}

const mapStateToProps = state => ({
  geolocations: get(state, 'openTender.data.geolocations'),
  currentPosition: get(state, 'geocoder.currentPosition'),
  selectedGeocoderFeature: get(state, 'geocoder.selected')
});

export default connect(mapStateToProps)(
  withRouter(withComponents(withLocales(LocationsSearchResults)))
);
