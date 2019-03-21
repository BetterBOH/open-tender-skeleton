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

import { setModal } from 'state/actions/ui/modalActions';

import {
  itemBeingEdited,
  currentLocation,
  currentMenu,
  currentMenuStatus
} from 'state/selectors';

import ModalTypes from 'constants/ModalTypes';

import get from 'utils/get';

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');
  model = () => {
    const {
      actions,
      serviceType,
      locationId,
      openTenderRef,
      orderRef,
      itemBeingEdited
    } = this.props;

    const requestedAt = new Date();
    const menuType = { locationId, serviceType, requestedAt };
    const modalAction = itemBeingEdited
      ? actions.setModal(ModalTypes.LINE_ITEM_EDITOR, { itemBeingEdited })
      : Promise.resolve();

    return Promise.all([
      actions.fetchFavorites(openTenderRef),
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId, { include_times: true }),
      actions.setOrderLocationId(orderRef, locationId),
      modalAction
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
  locationId: get(state, 'openTender.session.order.orderData.location_id'),
  currentLocation: currentLocation(state),
  menu: currentMenu(state),
  menuStatus: currentMenuStatus(state),
  itemBeingEdited: itemBeingEdited(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchMenu, fetchLocation, setOrderLocationId, fetchFavorites, setModal },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
