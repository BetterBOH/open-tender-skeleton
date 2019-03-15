import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateCurrentCart, bindCustomerToOrder } from 'brandibble-redux';

import { currentLocation, userIsAuthenticated } from 'state/selectors';
import get from 'utils/get';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');

  model = () => {
    const openTenderRef = get(this, 'props.openTenderRef');
    const validateCurrentCart = get(
      this,
      'props.actions.validateCurrentCart',
      f => f
    );
    const promises = [validateCurrentCart(openTenderRef)];
    if (get(this, 'props.userIsAuthenticated', false)) {
      const orderRef = get(this, 'props.orderRef');
      const customer = get(this, 'props.userAttributes');
      const bindCustomerToOrder = get(
        this,
        'props.actions.bindCustomerToOrder',
        f => f
      );
      promises.push(bindCustomerToOrder(orderRef, customer));
    }

    return Promise.all(promises);
  };
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  userAttributes: get(state, 'openTender.user.attributes'),
  currentLocation: currentLocation(state),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateCurrentCart,
      bindCustomerToOrder,
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
