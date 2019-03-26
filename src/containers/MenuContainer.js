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

import { setModal, resetModal } from 'state/actions/ui/modalActions';
import ModalTypes from 'constants/ModalTypes';

import {
  currentLocation,
  currentMenu,
  currentMenuStatus,
  currentItem
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
      orderRef,
      currentItem
    } = this.props;

    const requestedAt = new Date();
    const menuType = { locationId, serviceType, requestedAt };

    const modalAction = currentItem
      ? actions.setModal(ModalTypes.LINE_ITEM_EDITOR, { currentItem })
      : actions.resetModal();

    return Promise.all([
      actions.fetchFavorites(openTenderRef),
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId, { include_times: true }),
      actions.setOrderLocationId(orderRef, locationId),
      modalAction
    ]);
  };

  shouldReloadModel = prevProps => {
    return (
      get(prevProps, 'currentItem.uuid') !==
        get(this.props, 'currentItem.uuid') ||
      get(prevProps, 'location.pathname') !==
        get(this, 'props.location.pathname')
    );
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
  currentItem: currentItem(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchMenu,
      fetchLocation,
      setOrderLocationId,
      fetchFavorites,
      setModal,
      resetModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
