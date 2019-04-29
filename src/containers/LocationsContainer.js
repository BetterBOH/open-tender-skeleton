import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGeolocations } from 'brandibble-redux';

import get from 'utils/get';
import { filteredLocationsGeoJSON } from 'state/selectors';

class LocationsContainer extends ContainerBase {
  view = import('views/LocationsView');

  model = () => {
    const {
      actions,
      openTenderRef,
      geolocations,
      serviceType,
      selectedGeocoderFeature
    } = this.props;

    if (!selectedGeocoderFeature && (!geolocations || !geolocations.length)) {
      return actions.fetchGeolocations(openTenderRef, {
        service_type: serviceType
      });
    }
  };
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
  serviceType: get(state, 'openTender.session.order.orderData.service_type'),
  fetchGeolocationsStatus: get(state, 'openTender.status.fetchGeolocations')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchGeolocations }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationsContainer);
