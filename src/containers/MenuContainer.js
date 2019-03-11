import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchMenu,
  fetchLocation,
  setOrderLocationId,
  Constants,
  fetchFavorites
} from 'brandibble-redux';
import {
  locationIdFromMenuUrl,
  currentLocation,
  currentMenu
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

    return Promise.all([
      actions.fetchFavorites(openTenderRef),
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId),
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
  menu: currentMenu(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchMenu, fetchLocation, setOrderLocationId, fetchFavorites },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
