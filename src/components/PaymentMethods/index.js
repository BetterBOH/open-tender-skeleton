import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

import {
  Status,
  setPaymentMethod,
  createPayment,
  setDefaultPayment,
  deletePayment
} from 'brandibble-redux';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import { userIsAuthenticated } from 'state/selectors';

import {
  Stages,
  SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER
} from 'constants/PaymentMethods';
import { DefaultAcceptedPaymentTypes } from 'constants/PaymentMethods';
import FlashVariants from 'constants/FlashVariants';
import get from 'utils/get';

const { MESSAGE, ERROR } = FlashVariants;

class PaymentMethods extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func,
    selectPaymentMethodVariant: PropTypes.string
  };

  static defaultProps = {
    onClose: f => f,
    selectPaymentMethodVariant: SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER
  };

  state = {
    currentStage: Stages.SELECT_EXISTING_PAYMENT_METHOD,
    newPaymentMethodType: ''
  };

  componentDidUpdate(prevProps) {
    const { actions, localesContext, onClose } = this.props;

    /* setPaymentMethod */
    if (
      get(prevProps, 'setPaymentMethodStatus') === Status.PENDING &&
      get(this, 'props.setPaymentMethodStatus') === Status.FULFILLED
    ) {
      return onClose();
    }

    if (
      get(prevProps, 'setPaymentMethodStatus') === Status.PENDING &&
      get(this, 'props.setPaymentMethodStatus') === Status.REJECTED
    ) {
      return actions.createSystemNotification({
        message: localesContext.Language.t(
          'checkout.notifications.setPaymentMethod.error'
        ),
        variant: ERROR
      });
    }

    /* setDefaultPayment */
    if (
      get(prevProps, 'setDefaultPaymentStatus') === Status.PENDING &&
      get(this, 'props.setDefaultPaymentStatus') === Status.FULFILLED
    ) {
      actions.createSystemNotification({
        message: localesContext.Language.t(
          'checkout.notifications.setDefaultPayment.success'
        ),
        variant: MESSAGE
      });
    }

    if (
      get(prevProps, 'setDefaultPaymentStatus') === Status.PENDING &&
      get(this, 'props.setDefaultPaymentStatus') === Status.REJECTED
    ) {
      return actions.createSystemNotification({
        message: localesContext.Language.t(
          'checkout.notifications.setDefaultPayment.error'
        ),
        variant: ERROR
      });
    }

    /* createPaymentMethod */
    if (
      get(prevProps, 'createPaymentMethodStatus') === Status.PENDING &&
      get(this, 'props.createPaymentMethodStatus') === Status.FULFILLED
    ) {
      actions.createSystemNotification({
        message: localesContext.Language.t(
          'checkout.notifications.createPayment.success'
        ),
        variant: MESSAGE
      });
      return onClose();
    }

    if (
      get(prevProps, 'createPaymentMethodStatus') === Status.PENDING &&
      get(this, 'props.createPaymentMethodStatus') === Status.REJECTED
    ) {
      return actions.createSystemNotification({
        message: localesContext.Language.t(
          'checkout.notifications.createPayment.error'
        ),
        variant: ERROR
      });
    }
  }

  switchToSelectExistingPaymentMethod = () => {
    return this.setState({
      currentStage: Stages.SELECT_EXISTING_PAYMENT_METHOD
    });
  };

  switchToSelectNewPaymentMethod = () => {
    return this.setState({ currentStage: Stages.SELECT_NEW_PAYMENT_METHOD });
  };

  switchToCreatePaymentMethod = () => {
    return this.setState({ currentStage: Stages.CREATE_PAYMENT_METHOD });
  };

  selectPaymentMethodType = newPaymentMethodType => {
    return this.setState({ newPaymentMethodType });
  };

  getDefaultPaymentMethodId = () => {
    const defaultPaymentMethodId = Object.keys(
      this.props.paymentMethodsById
    ).find(paymentMethodsById =>
      get(this, `props.paymentMethodsById[${paymentMethodsById}].is_default`)
    );
    return defaultPaymentMethodId ? parseInt(defaultPaymentMethodId) : null;
  };

  render() {
    const {
      actions,
      orderRef,
      openTenderRef,
      userIsAuthenticated,
      paymentMethodsById,
      onClose,
      selectPaymentMethodVariant,
      setDefaultPaymentStatus
    } = this.props;

    const { currentStage, newPaymentMethodType } = this.state;

    return RegistryLoader(
      {
        actions,
        orderRef,
        openTenderRef,
        userIsAuthenticated,
        paymentTypes: DefaultAcceptedPaymentTypes,
        paymentMethodsById,
        onClose,
        currentStage,
        newPaymentMethodType,
        selectPaymentMethodVariant,
        switchToSelectExistingPaymentMethod: this
          .switchToSelectExistingPaymentMethod,
        switchToSelectNewPaymentMethod: this.switchToSelectNewPaymentMethod,
        switchToCreatePaymentMethod: this.switchToCreatePaymentMethod,
        selectPaymentMethodType: this.selectPaymentMethodType,
        defaultPaymentMethodId: this.getDefaultPaymentMethodId(),
        setDefaultPaymentIsStatusPending:
          setDefaultPaymentStatus === Status.PENDING
      },
      'components.PaymentMethods',
      () => import('./presentation')
    );
  }
}

const mapStateToProps = state => ({
  orderRef: get(state, 'openTender.session.order.ref'),
  openTenderRef: get(state, 'openTender.ref'),
  paymentMethodsById: get(state, 'openTender.session.payments.paymentsById'),
  createPaymentMethodStatus: get(state, 'openTender.status.createPayment'),
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod'),
  setDefaultPaymentStatus: get(state, 'openTender.status.setDefaultPayment'),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createSystemNotification,
      setPaymentMethod,
      createPayment,
      setDefaultPayment,
      deletePayment
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocales(PaymentMethods));
