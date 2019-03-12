import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  submitOrder,
  bindCustomerToOrder,
  createPayment,
  setPaymentMethod,
  validateCurrentOrder,
  fetchPayments
} from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';

import get from 'utils/get';

class CheckoutContainer extends ContainerBase {
  model = () => {
    this.props.actions.fetchPayments(this.props.openTenderRef);
  };
  view = import('views/CheckoutView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  userIsAuthenticated: userIsAuthenticated(state),
  order: get(state, 'openTender.session.order.ref'),
  customer: get(state, 'openTender.user.attributes'),
  testCCs: get(state, 'openTender.ref.TestCreditCards'),
  openTender: get(state, 'openTender')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      submitOrder,
      bindCustomerToOrder,
      createPayment,
      setPaymentMethod,
      validateCurrentOrder,
      fetchPayments
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
