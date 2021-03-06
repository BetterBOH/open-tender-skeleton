import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchMenu,
  fetchLocation,
  setOrderLocationId,
  fetchFavorites,
  fetchAllergens,
  Constants,
  Status
} from 'brandibble-redux';
import { setModal, resetModal } from 'state/actions/ui/modalActions';
import { handleCartValidationErrors } from 'state/actions/orderActions';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import ModalTypes from 'constants/ModalTypes';

import {
  currentLocation,
  currentMenu,
  currentMenuQuantities,
  currentMenuFavorites,
  currentMenuStatus,
  currentLineItem,
  userIsAuthenticated,
  lineItemUuidFromUrl,
  lineItemsSubtotal
} from 'state/selectors';

import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';
import parseLocationIdFromRouteParam from 'utils/parseLocationIdFromRouteParam';

const { PICKUP, DELIVERY } = Constants.ServiceTypes;

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');

  componentDidUpdate(prevProps) {
    super.componentDidUpdate(prevProps);

    if (
      prevProps.fetchLocationStatus === Status.PENDING &&
      this.props.fetchLocationStatus === Status.FULFILLED
    ) {
      this.alertUserTheyAreBelowDeliveryMinimum();
    }
  }

  alertUserTheyAreBelowDeliveryMinimum = () => {
    if (this.props.serviceType !== DELIVERY) return;

    const locationId = parseLocationIdFromRouteParam(
      get(this, 'props.match.params.locationId')
    );
    const deliveryMinimum = get(
      this,
      `props.locationsById[${locationId}].delivery_minimum`
    );
    const subtotal = parseFloat(
      get(this, 'props.subtotal', '0').replace('$', '')
    );

    if (!deliveryMinimum) return;

    const { actions } = this.props;

    if (subtotal < deliveryMinimum) {
      const Language = get(getConfig(ConfigKeys.LOCALES), 'Language');

      return actions.createSystemNotification({
        message: Language.t(
          'systemNotification.validateOrder.errors.belowDeliveryMinimum',
          { deliveryMinimum }
        )
      });
    }
  };

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
        actions.setOrderLocationId(
          orderRef,
          locationId,
          errors => actions.handleCartValidationErrors(errors),
          { apiVersion: 'v2' }
        )
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
  locationsById: get(state, 'openTender.data.locations.locationsById'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  orderData: get(state, 'openTender.session.order.orderData'),
  serviceType: get(
    state,
    'openTender.session.order.orderData.service_type',
    PICKUP
  ),
  currentLocation: currentLocation(state),
  menu: currentMenu(state),
  currentMenuQuantities: currentMenuQuantities(state),
  currentMenuFavorites: currentMenuFavorites(state),
  menuStatus: currentMenuStatus(state),
  currentLineItem: currentLineItem(state),
  lineItemUuidFromUrl: lineItemUuidFromUrl(state),
  userIsAuthenticated: userIsAuthenticated(state),
  fetchLocationStatus: get(state, 'openTender.status.fetchLocation'),
  subtotal: lineItemsSubtotal(state)
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
      resetModal,
      handleCartValidationErrors,
      createSystemNotification
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
