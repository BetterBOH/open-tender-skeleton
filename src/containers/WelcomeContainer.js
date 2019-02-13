import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setServiceType } from 'brandibble-redux';

import {
  fetchAllLocations,
  setLocationType
} from 'state/actions/locationsActions';
import get from 'utils/get';
import {
  locationsByOrderType,
  locationsHasOnlineOrderingPickup,
  locationsHasCateringPickup,
  locationsHasOnlineOrderingDelivery,
  locationsHasCateringDelivery
} from 'state/selectors';

class WelcomeContainer extends ContainerBase {
  view = import('views/WelcomeView');

  model = () => {
    const { actions, openTenderRef } = this.props;

    return actions.fetchAllLocations(openTenderRef);
  };
}

const mapStateToProps = state => ({
  order: get(state, 'order', {}),
  openTenderRef: get(state, 'openTender.ref', {}),
  orderRef: get(state, 'openTender.session.order.ref'),
  selectedLocationType: get(state, 'locations.locationType'),
  locations: locationsByOrderType(state),
  oloPickupIsAvailable: locationsHasOnlineOrderingPickup(state),
  oloDeliveryIsAvailable: locationsHasOnlineOrderingDelivery(state),
  cateringPickupIsAvailable: locationsHasCateringPickup(state),
  cateringDeliveryIsAvailable: locationsHasCateringDelivery(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchAllLocations,
        setServiceType,
        setLocationType
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
