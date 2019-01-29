import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAllLocations } from 'state/actions/locationsActions';
import {
  setOrderType,
  setServiceType,
  setOrderAndServiceType
} from 'state/actions/orderActions';

import get from 'utils/get';
import locationsByOrderType from 'state/selectors/locationsByOrderType';
import locationsHasOnlineOrderingDelivery from 'state/selectors/locationsHasOnlineOrderingDelivery';

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
  locations: locationsByOrderType(state),
  deliveryIsAvailable: locationsHasOnlineOrderingDelivery(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchAllLocations,
        setOrderType,
        setServiceType,
        setOrderAndServiceType
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
