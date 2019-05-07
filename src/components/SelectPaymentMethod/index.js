import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OrderRefModel from 'constants/Models/OrderRefModel';

import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import {
  ADD_PAYMENT_METHOD,
  SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER,
  SELECT_PAYMENT_METHOD_VARIANT_EDIT_ACCOUNT
} from 'constants/PaymentMethods';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      setPaymentMethod: PropTypes.func,
      setDefaultPayment: PropTypes.func,
      deletePayment: PropTypes.func
    }),
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentMethodsById: PropTypes.object,
    orderRef: OrderRefModel.propTypes,
    variant: PropTypes.string,
    defaultPaymentMethodId: PropTypes.number
  };

  static defaultProps = {
    confirm: f => f,
    cancel: f => f,
    paymentMethodsById: {},
    orderRef: OrderRefModel.defaultProps,
    actions: {
      setPaymentMethod: f => f,
      setDefaultPayment: f => f,
      deletePayment: f => f
    },
    variant: SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER,
    defaultPaymentMethodId: null
  };

  constructor(props) {
    super(...arguments);

    this.state = {
      selectedPaymentTypeId: props.defaultPaymentMethodId
    };
  }

  selectExistingPaymentMethod = id => {
    return this.setState({
      selectedPaymentTypeId: id
    });
  };

  handleSetDefault = () => {
    const { actions, openTenderRef } = this.props;
    const selectedPaymentTypeId = this.state.selectedPaymentTypeId;

    if (
      selectedPaymentTypeId === ADD_PAYMENT_METHOD ||
      !selectedPaymentTypeId
    ) {
      return null;
    }

    if (selectedPaymentTypeId) {
      return actions.setDefaultPayment(openTenderRef, selectedPaymentTypeId);
    }
  };

  handleSubmit = () => {
    const { actions, orderRef, openTenderRef, variant } = this.props;

    if (this.state.selectedPaymentTypeId === ADD_PAYMENT_METHOD) {
      return this.props.confirm();
    }

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
      return actions.setPaymentMethod(orderRef, 'credit', cardToApply);
    }
  };

  render() {
    const {
      cancel,
      paymentMethodsById,
      variant,
      setDefaultPaymentIsPending,
      defaultPaymentMethodId
    } = this.props;
    const { selectedPaymentTypeId } = this.state;

    return RegistryLoader(
      {
        confirm: this.handleSubmit,
        cancel,
        paymentMethodsById,
        variant,
        selectedPaymentTypeId,
        selectExistingPaymentMethod: this.selectExistingPaymentMethod,
        setDefaultPaymentIsPending,
        handleSetDefault: this.handleSetDefault,
        defaultPaymentMethodId
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentMethod;
