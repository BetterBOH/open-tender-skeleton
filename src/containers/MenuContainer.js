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
import { removeInvalidLineItems } from 'state/actions/orderActions';
import { setModal, resetModal } from 'state/actions/ui/modalActions';
import ModalTypes from 'constants/ModalTypes';

import {
  currentLocation,
  currentMenu,
  currentMenuStatus,
  currentLineItem,
  userIsAuthenticated
} from 'state/selectors';

import get from 'utils/get';
import parseLocationIdFromRouteParam from 'utils/parseLocationIdFromRouteParam';

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');

  model = () => {
    const {
      match,
      actions,
      serviceType,
      openTenderRef,
      orderRef,
      currentLineItem,
      userIsAuthenticated
    } = this.props;

    const requestedAt = new Date();
    const locationId = parseLocationIdFromRouteParam(
      get(match, 'params.locationId')
    );
    const menuType = { locationId, serviceType, requestedAt };
    if (currentLineItem) {
      actions.setModal(ModalTypes.LINE_ITEM_EDITOR, { currentLineItem });
    } else {
      actions.resetModal();
    }

    const promisesToResolve = [
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId, { include_times: true }),
      actions.setOrderLocationId(orderRef, locationId)
    ];

    if (userIsAuthenticated) {
      promisesToResolve.push(action.fetchFavorites(openTenderRef));
    }

    return Promise.all(promisesToResolve);
  };

  shouldReloadModel = prevProps => {
    return (
      get(prevProps, 'currentLineItem.uuid') !==
        get(this.props, 'currentLineItem.uuid') ||
      get(prevProps, 'location.pathname') !==
        get(this, 'props.location.pathname')
    );
  };

  componentWillUnmount() {
    const { actions } = this.props;

    return actions.removeInvalidLineItems();
  }
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
  currentLocation: currentLocation(state),
  menu: currentMenu(state),
  menuStatus: currentMenuStatus(state),
  currentLineItem: currentLineItem(state),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchMenu,
      fetchLocation,
      setOrderLocationId,
      fetchFavorites,
      setModal,
      resetModal,
      removeInvalidLineItems
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
