import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'utils/get';
import { filteredLocationsGeoJSON } from 'state/selectors';
import {
  setDeliveryFormAddressUnit,
  clearDeliveryFormAddress
} from 'state/actions/deliveryActions';
import { confirmChangeToDelivery } from 'state/actions/serviceTypeActions';
import { Status } from 'brandibble-redux';
import getRoutes, { RouteProperties } from 'utils/getRoutes';
import getLocationSlug from 'utils/getLocationSlug';

class DeliveryContainer extends ContainerBase {
  view = import('views/DeliveryView');

  componentDidUpdate(prevProps) {
    if (
      prevProps.confirmChangeToDeliveryStatus === Status.PENDING &&
      this.props.confirmChangeToDeliveryStatus === Status.FULFILLED
    ) {
      const location = get(this, 'props.geolocations', []).find(
        location => location.in_delivery_zone
      );
      const { history } = this.props;
      const basename = getRoutes(RouteProperties.BASENAME).MENUS;
      const locationSlug = getLocationSlug(location);

      return history.push(`${basename}/${locationSlug}`);
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
  address: get(state, 'delivery.modifiedAddress'),
  confirmChangeToDeliveryStatus: get(state, 'status.confirmChangeToDelivery')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setDeliveryFormAddressUnit,
      clearDeliveryFormAddress,
      confirmChangeToDelivery
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryContainer);
