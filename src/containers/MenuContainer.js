import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMenu, Constants } from 'brandibble-redux';
import { locationIdFromMenuUrl } from 'state/selectors';

import get from 'utils/get';

class MenuContainer extends ContainerBase {
  view = import('views/MenuView');

  model = () => {
    const { actions, serviceType, locationId, openTenderRef } = this.props;
    const requestedAt = new Date();

    const menuType = { locationId, serviceType, requestedAt };

    console.log(menuType);
    return actions.fetchMenu(openTenderRef, menuType);
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
  locationId: locationIdFromMenuUrl(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchMenu }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
