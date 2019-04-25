import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

import { setPaymentMethod, createPayment } from 'brandibble-redux';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import { paymentTypes, userIsAuthenticated } from 'state/selectors';

import { Stages } from 'constants/PaymentMethods';
import { PENDING, FULFILLED, REJECTED } from 'constants/Status';
import FlashVariants from 'constants/FlashVariants';
import get from 'utils/get';

const { MESSAGE, ERROR } = FlashVariants;

class PaymentMethods extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func
  };

  static defaultProps = {
    onClose: f => f
  };

  state = {
    currentStage: Stages.SELECT_EXISTING_PAYMENT_METHOD,
    newPaymentMethodType: ''
  };

  componentDidMount() {
    const { userIsAuthenticated } = this.props;

    if (!userIsAuthenticated) {
      return this.setState({
        currentStage: Stages.CREATE_PAYMENT_METHOD,
        newPaymentMethodType: 'credit'
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { actions, localesContext, onClose } = this.props;

    /* setPaymentMethod */
    if (
      get(prevProps, 'setPaymentMethodStatus') === PENDING &&
      get(this, 'props.setPaymentMethodStatus') === FULFILLED
    ) {
      return onClose();
    }

    if (
      get(prevProps, 'setPaymentMethodStatus') === PENDING &&
      get(this, 'props.setPaymentMethodStatus') === REJECTED
    ) {
      return actions.createSystemNotification({
        message: localesContext.Language.t(
          'checkout.notifications.setPaymentMethod.error'
        ),
        variant: ERROR
      });
    }

    /* createPaymentMethod */
    if (
      get(prevProps, 'createPaymentMethodStatus') === PENDING &&
      get(this, 'props.createPaymentMethodStatus') === FULFILLED
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
      get(prevProps, 'createPaymentMethodStatus') === PENDING &&
      get(this, 'props.createPaymentMethodStatus') === REJECTED
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
    this.setState({ currentStage: Stages.SELECT_EXISTING_PAYMENT_METHOD });
  };

  switchToSelectNewPaymentMethod = () => {
    this.setState({ currentStage: Stages.SELECT_NEW_PAYMENT_METHOD });
  };

  switchToCreatePaymentMethod = () => {
    this.setState({ currentStage: Stages.CREATE_PAYMENT_METHOD });
  };

  selectPaymentMethodType = newPaymentMethodType => {
    this.setState({ newPaymentMethodType });
  };

  render() {
    const {
      actions,
      orderRef,
      openTenderRef,
      userIsAuthenticated,
      paymentTypes,
      paymentMethodsById,
      onClose
    } = this.props;
    const { currentStage, newPaymentMethodType } = this.state;

    return RegistryLoader(
      {
        actions,
        orderRef,
        openTenderRef,
        userIsAuthenticated,
        paymentTypes,
        paymentMethodsById,
        onClose,
        currentStage,
        newPaymentMethodType,
        switchToSelectExistingPaymentMethod: this
          .switchToSelectExistingPaymentMethod,
        switchToSelectNewPaymentMethod: this.switchToSelectNewPaymentMethod,
        switchToCreatePaymentMethod: this.switchToCreatePaymentMethod,
        selectPaymentMethodType: this.selectPaymentMethodType
      },
      'components.PaymentMethod',
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
  setPaymentMethodStatus: get(state, 'openTender.status.setPaymentMethod'),
  userIsAuthenticated: userIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
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
)(withLocales(PaymentMethods));
