import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { INVALID_ITEMS_POINTER } from 'constants/OpenTender';

import {
  fetchMenu,
  fetchLocation,
  setOrderLocationId,
  fetchFavorites,
  fetchAllergens,
  Constants
} from 'brandibble-redux';
import { setModal, resetModal } from 'state/actions/ui/modalActions';
import ModalTypes from 'constants/ModalTypes';

import {
  currentLocation,
  currentMenu,
  currentMenuStatus,
  currentLineItem,
  userIsAuthenticated,
  lineItemUuidFromUrl
} from 'state/selectors';

import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
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
      orderData,
      currentLineItem,
      lineItemUuidFromUrl,
      userIsAuthenticated
    } = this.props;

    const requestedAt = new Date();
    const locationId = parseLocationIdFromRouteParam(
      get(match, 'params.locationId')
    );
    const menuType = { locationId, serviceType, requestedAt };

    if (currentLineItem) {
      actions.setModal(ModalTypes.LINE_ITEM_EDITOR);
    } else {
      if (lineItemUuidFromUrl) {
        get(getConfig(ConfigKeys.STATE), 'history').goBack();
      } else {
        actions.resetModal();
      }
    }

    const promisesToResolve = [
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId, { include_times: true }),
      actions.fetchAllergens(openTenderRef)
    ];

    if (locationId !== get(orderData, 'location_id')) {
      promisesToResolve.push(
        actions.setOrderLocationId(orderRef, locationId, (err, proceed) => {
          const errors = get(err, 'errors');

          return actions.setModal(ModalTypes.INVALID_ITEMS_IN_CART, {
            errors,
            handleAcceptClick: proceed
          });
        })
      );
    }

    if (userIsAuthenticated) {
      promisesToResolve.push(actions.fetchFavorites(openTenderRef));
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
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  orderData: get(state, 'openTender.session.order.orderData'),
  serviceType: get(
    state,
    'openTender.session.order.orderData.service_type',
    Constants.ServiceTypes.PICKUP
  ),
  currentLocation: currentLocation(state),
  menu: currentMenu(state),
  menuStatus: currentMenuStatus(state),
  currentLineItem: currentLineItem(state),
  lineItemUuidFromUrl: lineItemUuidFromUrl(state),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchAllergens,
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
