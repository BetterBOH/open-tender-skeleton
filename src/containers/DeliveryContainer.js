import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'utils/get';
import { filteredLocationsGeoJSON } from 'state/selectors';
import {
  setDeliveryFormAddressUnit,
  clearDeliveryFormAddress
} from 'state/actions/deliveryActions';

class DeliveryContainer extends ContainerBase {
  view = import('views/DeliveryView');
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
  fetchGeolocationsStatus: get(state, 'openTender.status.fetchGeolocations'),
  address: get(state, 'delivery.modifiedAddress')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setDeliveryFormAddressUnit,
      clearDeliveryFormAddress
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryContainer);
