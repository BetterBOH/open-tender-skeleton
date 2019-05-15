import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Status } from 'brandibble-redux';

import get from 'utils/get';
import getRoutes from 'utils/getRoutes';
import { filteredLocationsGeoJSON } from 'state/selectors';
import {
  setDeliveryFormAddressUnit,
  clearDeliveryFormAddress
} from 'state/actions/deliveryActions';

class DeliveryContainer extends ContainerBase {
  view = import('views/DeliveryView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);

    if (
      prevProps.fetchGeolocationsStatus === Status.PENDING &&
      this.props.fetchGeolocationsStatus === Status.FULFILLED
    ) {
      console.log('this.props.geolocations', this.props.geolocations);
      // this.props.history.push(getRoutes().LOCATIONS);
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
