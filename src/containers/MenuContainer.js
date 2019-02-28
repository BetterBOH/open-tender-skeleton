import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMenu, fetchLocation, Constants } from 'brandibble-redux';
import { locationIdFromMenuUrl, currentLocation } from 'state/selectors';

import get from 'utils/get';

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');

  model = () => {
    const { actions, serviceType, locationId, openTenderRef } = this.props;
    const requestedAt = new Date();

    const menuType = { locationId, serviceType, requestedAt };

    return Promise.all([
      actions.fetchMenu(openTenderRef, menuType),
      actions.fetchLocation(openTenderRef, locationId)
    ]);
  };
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref'),
  serviceType: get(
    state,
    'openTender.session.order.orderData.service_type',
    Constants.ServiceTypes.PICKUP
  ),
  locationId: locationIdFromMenuUrl(state),
  currentLocation: currentLocation(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchMenu, fetchLocation }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
