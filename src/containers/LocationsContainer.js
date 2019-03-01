import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';

import get from 'utils/get';
import { filteredLocationsGeoJSON } from 'state/selectors';

class LocationsContainer extends ContainerBase {
  view = import('views/LocationsView');
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  geolocations: get(state, 'openTender.data.geolocations'),
  selectedGeocoderFeature: get(state, 'geocoder.selected'),
  filteredLocationsGeoJSON: filteredLocationsGeoJSON(state)
});

export default connect(mapStateToProps)(LocationsContainer);
