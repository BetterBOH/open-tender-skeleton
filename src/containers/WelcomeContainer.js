import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAllLocations } from 'state/actions/locationsActions';
import { setServiceType } from 'brandibble-redux';

import get from 'utils/get';
import {
  locationsByOrderType,
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
  locations: locationsByOrderType(state),
  oloDeliveryIsAvailable: locationsHasOnlineOrderingDelivery(state),
  cateringDeliveryIsAvailable: locationsHasCateringDelivery(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchAllLocations,
        setServiceType
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
