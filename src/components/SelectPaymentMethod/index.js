import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OrderRefModel from 'constants/Models/OrderRefModel';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import PaymentModel from 'constants/Models/PaymentModel';

import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import {
  SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER,
  SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT
} from 'constants/PaymentMethods';
import { CREDIT_CARD } from 'constants/OpenTender';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    variant: PropTypes.string,
    actions: PropTypes.shape({
      setPaymentMethod: PropTypes.func,
      setDefaultPayment: PropTypes.func,
      deletePayment: PropTypes.func
    }),
    switchToSelectNewPaymentMethodType: PropTypes.func,
    handleCancel: PropTypes.func,
    paymentMethodsById: PropTypes.objectOf(PaymentModel.propTypes),
    orderRef: OrderRefModel.propTypes,
    openTenderRef: OpenTenderRefModel.propTypes,
    defaultPaymentMethodId: PropTypes.number,
    setDefaultPaymentIsPending: PropTypes.bool
  };

  static defaultProps = {
    variant: SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER,
    actions: {
      setPaymentMethod: f => f,
      setDefaultPayment: f => f,
      deletePayment: f => f
    },
    switchToSelectNewPaymentMethodType: f => f,
    handleCancel: f => f,
    paymentMethodsById: {},
    orderRef: OrderRefModel.defaultProps,
    openTenderRef: OpenTenderRefModel.defaultProps,
    defaultPaymentMethodId: null,
    setDefaultPaymentIsPending: false
  };

  constructor(props) {
    super(...arguments);

    /**
     * If we are editing the current order,
     * we set the initial payment ID as the payment method bound to the order.
     * Otherwise, we set it to the user's default payment method, if available.
     * */

    this.state = {
      selectedPaymentTypeId:
        props.variant === SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER
          ? get(props, 'orderRef.creditCard.customer_card_id', null)
          : props.defaultPaymentMethodId
    };
  }

  componentDidMount() {
    const {
      paymentMethodsById,
      switchToSelectNewPaymentMethodType
    } = this.props;

    if (!Object.keys(paymentMethodsById).length) {
      return switchToSelectNewPaymentMethodType();
    }
  }

  selectExistingPaymentMethod = id => {
    return this.setState({
      selectedPaymentTypeId: parseInt(id)
    });
  };

  handleSetDefault = () => {
    const { actions, openTenderRef, defaultPaymentMethodId } = this.props;
    const { selectedPaymentTypeId } = this.state;

    if (
      !selectedPaymentTypeId ||
      selectedPaymentTypeId === defaultPaymentMethodId
    ) {
      return null;
    }

    return actions.setDefaultPayment(openTenderRef, selectedPaymentTypeId);
  };

  handleConfirm = () => {
    const { actions, orderRef, openTenderRef, variant } = this.props;

    if (
      variant === SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT &&
      !!this.state.selectedPaymentTypeId
    ) {
      const cardIdToDelete = get(
        this,
        `props.paymentMethodsById[${
          this.state.selectedPaymentTypeId
        }].customer_card_id`
      );

      if (!cardIdToDelete) return null;

      return actions.deletePayment(openTenderRef, cardIdToDelete);
    }

    const cardToApply = this.props.paymentMethodsById[
      this.state.selectedPaymentTypeId
    ];

    if (cardToApply) {
      return actions.setPaymentMethod(orderRef, CREDIT_CARD, cardToApply);
    }
  };

  render() {
    const {
      variant,
      switchToSelectNewPaymentMethodType,
      handleCancel,
      paymentMethodsById,
      setDefaultPaymentIsPending,
      defaultPaymentMethodId
    } = this.props;

    const { selectedPaymentTypeId } = this.state;

    return RegistryLoader(
      {
        variant,
        switchToSelectNewPaymentMethodType,
        handleConfirm: this.handleConfirm,
        handleCancel,
        paymentMethodsById,
        selectedPaymentTypeId,
        selectExistingPaymentMethod: this.selectExistingPaymentMethod,
        handleSetDefault: this.handleSetDefault,
        setDefaultPaymentIsPending,
        defaultPaymentMethodId
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentMethod;
