import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchMenu,
  fetchLocation,
  setOrderLocationId,
  Constants
} from 'brandibble-redux';
import {
  locationIdFromMenuUrl,
  currentLocation,
  currentMenu,
  currentMenuStatus
} from 'state/selectors';

import get from 'utils/get';

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');

  model = () => {
    const {
      actions,
      serviceType,
      locationId,
      openTenderRef,
      orderRef
    } = this.props;
    const requestedAt = new Date();

    const menuType = { locationId, serviceType, requestedAt };

    console.log(this.props.menuStatus);

    return Promise.all([
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId, { include_times: true }),
      actions.setOrderLocationId(orderRef, locationId)
    ]);
  };
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  serviceType: get(
    state,
    'openTender.session.order.orderData.service_type',
    Constants.ServiceTypes.PICKUP
  ),
  locationId: locationIdFromMenuUrl(state),
  currentLocation: currentLocation(state),
  menu: currentMenu(state),
  menuStatus: currentMenuStatus(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchMenu, fetchLocation, setOrderLocationId },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
