import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPaymentMethod, createPayment } from 'brandibble-redux';
import withLocales from 'lib/withLocales';
import FlashVariants from 'constants/FlashVariants';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import { resetDrawer } from 'state/actions/ui/drawerActions';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import paymentTypes from 'state/selectors/paymentTypes';
import { PaymentDrawerStages } from 'constants/PaymentDrawer';
import { PENDING, FULFILLED, REJECTED } from 'constants/Status';

const { MESSAGE, ERROR } = FlashVariants;

class PaymentDrawer extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      stage: PaymentDrawerStages.SelectExistingPaymentMethod,
      newPaymentMethodType: ''
    };
  }

  componentDidUpdate(prevProps) {
    const Language = get(this, 'props.localesContext.Language');
    const resetDrawer = get(this, 'props.actions.resetDrawer', f => f);
    const createSystemNotification = get(
      this,
      'props.actions.createSystemNotification',
      f => f
    );

    /* setPaymentMethod */
    if (
      get(prevProps, 'setPaymentMethodStatus') === PENDING &&
      get(this, 'props.setPaymentMethodStatus') === FULFILLED
    ) {
      createSystemNotification({
        message: Language.t('checkout.notifications.setPaymentMethod.success'),
        variant: MESSAGE
      });
      return resetDrawer();
    }

    if (
      get(prevProps, 'setPaymentMethodStatus') === PENDING &&
      get(this, 'props.setPaymentMethodStatus') === REJECTED
    ) {
      return createSystemNotification({
        message: Language.t('checkout.notifications.setPaymentMethod.error'),
        variant: ERROR
      });
    }

    /* createPaymentMethod */
    if (
      get(prevProps, 'createPaymentMethodStatus') === PENDING &&
      get(this, 'props.createPaymentMethodStatus') === FULFILLED
    ) {
      createSystemNotification({
        message: Language.t('checkout.notifications.createPayment.success'),
        variant: MESSAGE
      });
      return resetDrawer();
    }

    if (
      get(prevProps, 'createPaymentMethodStatus') === PENDING &&
      get(this, 'props.createPaymentMethodStatus') === REJECTED
    ) {
      return createSystemNotification({
        message: Language.t('checkout.notifications.createPayment.error'),
        variant: ERROR
      });
    }
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
  paymentMethodsById: get(state, 'openTender.session.payments.paymentsById'),
  createPaymentMethodStatus: get(state, 'openTender.status.createPayment'),
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetDrawer,
      createSystemNotification,
      setPaymentMethod,
      createPayment
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocales(PaymentDrawer));
