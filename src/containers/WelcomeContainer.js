import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Constants, Status } from 'brandibble-redux';

import { setOrderAndServiceType } from 'state/actions/orderActions';

import get from 'utils/get';
import getRoutes from 'utils/getRoutes';

const { PICKUP } = Constants.ServiceTypes;

class WelcomeContainer extends ContainerBase {
  view = import('views/WelcomeView');

  componentDidUpdate(prevProps) {
    if (
      prevProps.setOrderAndServiceType === Status.PENDING &&
      this.props.setOrderAndServiceType === Status.FULFILLED
    ) {
      if (this.props.serviceType === PICKUP) {
        this.props.history.push(getRoutes().PICKUP);
      }

      if (this.props.serviceType === DELIVERY) {
        this.props.history.push(getRoutes().DELIVERY);
      }
    }
  }
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  serviceType: get(state, 'openTender.session.order.orderData.service_type'),
  setOrderAndServiceType: get(state, 'status.setOrderAndServiceType')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setOrderAndServiceType }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
