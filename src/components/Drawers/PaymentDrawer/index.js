import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPaymentMethod, fetchPayments } from 'brandibble-redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { resetDrawer } from 'state/actions/ui/drawerActions';
import paymentTypes from 'state/selectors/paymentTypes';

class PaymentDrawer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'SelectExistingPaymentMethod',
      newPaymentMethodType: ''
    };
  }

  componentDidMount() {
    this.fetchPayments();
  }

  fetchPayments = () => {
    const { fetchPayments } = this.props.actions;
    const openTenderRef = get(this, 'props.openTenderRef');
    if (openTenderRef) fetchPayments(get(this, 'props.openTenderRef'));
  };

  componentDidUpdate(prevProps) {
    const setPaymentMethod =
      prevProps.setPaymentMethodStatus === 'PENDING' &&
      this.props.setPaymentMethodStatus === 'FULFILLED';

    if (setPaymentMethod) {
      this.fetchPayments();
      const { resetDrawer } = this.props.actions;
      resetDrawer();
    }
  }

  switchToSelectExistingPaymentMethod = () => {
    this.setState({ screen: 'SelectExistingPaymentMethod' });
  };

  switchToSelectNewPaymentMethod = () => {
    this.setState({ screen: 'SelectNewPaymentMethod' });
  };

  switchToCreatePaymentMethod = newPaymentMethodType => {
    this.setState({ screen: 'CreatePaymentMethod' });
  };

  selectPaymentMethodType = newPaymentMethodType => {
    this.setState({ newPaymentMethodType });
  };

  render() {
    const { orderRef, paymentTypes, paymentsById } = this.props;
    const { setPaymentMethod, resetDrawer } = this.props.actions;
    const { screen, newPaymentMethodType } = this.state;

    return RegistryLoader(
      {
        orderRef,
        paymentTypes,
        paymentsById,
        setPaymentMethod,
        resetDrawer,
        screen,
        newPaymentMethodType,
        switchToSelectExistingPaymentMethod: this
          .switchToSelectExistingPaymentMethod,
        switchToSelectNewPaymentMethod: this.switchToSelectNewPaymentMethod,
        switchToCreatePaymentMethod: this.switchToCreatePaymentMethod,
        selectPaymentMethodType: this.selectPaymentMethodType
      },
      'components.PaymentDrawer',
      () => import('./presentation')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  paymentTypes: paymentTypes(state),
  paymentsById: get(state, 'openTender.session.payments.paymentsById'),
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDrawer,
      setPaymentMethod,
      fetchPayments
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentDrawer);
