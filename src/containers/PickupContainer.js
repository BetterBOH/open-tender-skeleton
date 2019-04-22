import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { Status } from 'brandibble-redux';
import { filteredLocationsGeoJSON } from 'state/selectors';

import get from 'utils/get';
import getRoutes from 'utils/getRoutes';

class PickupContainer extends ContainerBase {
  view = import('views/PickupView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);

    if (
      prevProps.fetchGeolocationsStatus === Status.PENDING &&
      this.props.fetchGeolocationsStatus === Status.FULFILLED
    ) {
      this.props.history.push(getRoutes().LOCATIONS);
    }
  }
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  geolocations: get(state, 'openTender.data.geolocations'),
  selectedGeocoderFeature: get(state, 'geocoder.selected'),
  filteredLocationsGeoJSON: filteredLocationsGeoJSON(state),
  userCoordinates: get(state, 'geocoder.userCoordinates'),
  fetchGeolocationsStatus: get(state, 'openTender.status.fetchGeolocations')
});

export default connect(mapStateToProps)(PickupContainer);
