import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPaymentMethod, createPayment } from 'brandibble-redux';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { resetDrawer } from 'state/actions/ui/drawerActions';
import paymentTypes from 'state/selectors/paymentTypes';
import { PaymentDrawerStages } from 'constants/PaymentDrawer';

class PaymentDrawer extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      stage: PaymentDrawerStages.SelectExistingPaymentMethod,
      newPaymentMethodType: ''
    };
  }

  switchToSelectExistingPaymentMethod = () => {
    this.setState({ stage: PaymentDrawerStages.SelectExistingPaymentMethod });
  };

  switchToSelectNewPaymentMethod = () => {
    this.setState({ stage: PaymentDrawerStages.SelectNewPaymentMethod });
  };

  switchToCreatePaymentMethod = () => {
    this.setState({ stage: PaymentDrawerStages.CreatePaymentMethod });
  };

  selectPaymentMethodType = newPaymentMethodType => {
    this.setState({ newPaymentMethodType });
  };

  render() {
    const {
      orderRef,
      openTenderRef,
      paymentTypes,
      paymentMethodsById
    } = this.props;
    const { setPaymentMethod, createPayment, resetDrawer } = this.props.actions;
    const { stage, newPaymentMethodType } = this.state;

    return RegistryLoader(
      {
        orderRef,
        openTenderRef,
        paymentTypes,
        paymentMethodsById,
        setPaymentMethod,
        createPayment,
        resetDrawer,
        stage,
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
  orderRef: get(state, 'openTender.session.order.ref'),
  openTenderRef: get(state, 'openTender.ref'),
  paymentTypes: paymentTypes(state),
  paymentMethodsById: get(state, 'openTender.session.payments.paymentsById')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDrawer,
      setPaymentMethod,
      createPayment
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentDrawer);
