import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateCurrentCart, bindCustomerToOrder } from 'brandibble-redux';

import { currentLocation, userIsAuthenticated } from 'state/selectors';
import get from 'utils/get';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');

  model = () => {
    if (get(this, 'props.userIsAuthenticated', false)) {
      const order = get(this, 'props.order');
      const customer = get(this, 'props.userAttributes');
      const bindCustomerToOrder = get(
        this,
        'props.actions.bindCustomerToOrder',
        f => f
      );
      bindCustomerToOrder(order, customer);
    }

    const ref = get(this, 'props.openTenderRef');
    const currentCartData = {
      location_id: get(this, 'props.currentLocation.location_id')
    };
    const validateCurrentCart = get(
      this,
      'props.actions.validateCurrentCart',
      f => f
    );

    return validateCurrentCart(ref, currentCartData);
  };
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  order: get(state, 'openTender.session.order.ref'),
  userAttributes: get(state, 'openTender.user.attributes'),
  currentLocation: currentLocation(state),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      validateCurrentCart,
      bindCustomerToOrder
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
