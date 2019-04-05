import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPaymentMethod } from 'brandibble-redux';

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
    const { orderRef, paymentTypes, paymentMethodsById } = this.props;
    const { setPaymentMethod, resetDrawer } = this.props.actions;
    const { stage, newPaymentMethodType } = this.state;

    return RegistryLoader(
      {
        orderRef,
        paymentTypes,
        paymentMethodsById,
        setPaymentMethod,
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
  paymentTypes: paymentTypes(state),
  paymentMethodsById: get(state, 'openTender.session.payments.paymentsById')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDrawer,
      setPaymentMethod
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentDrawer);
