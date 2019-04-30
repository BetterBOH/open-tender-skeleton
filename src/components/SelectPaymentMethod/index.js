import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OrderRefModel from 'constants/Models/OrderRefModel';

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
    userIsAuthenticated: PropTypes.bool,
    variant: PropTypes.string
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
    userIsAuthenticated: false,
    variant: SELECT_PAYMENT_METHOD_VARIANT_EDIT_ORDER
  };

  state = {
    selectedPaymentTypeId: ''
  };

  selectExistingPaymentMethod = id => {
    return this.setState({
      selectedPaymentTypeId: id
    });
  };

  handleSubmit = () => {
    const {
      actions,
      orderRef,
      openTenderRef,
      userIsAuthenticated,
      variant
    } = this.props;

    if (this.state.selectedPaymentTypeId === ADD_PAYMENT_METHOD) {
      return this.props.confirm();
    }

    if (variant === 'EditAccount' && !!this.state.selectedPaymentTypeId) {
      const cardToDelete = this.props.paymentMethodsById[
        this.state.selectedPaymentTypeId
      ];
      return actions.deletePayment(
        openTenderRef,
        cardToDelete.customer_card_id
      );
    }

    const cardToApply = this.props.paymentMethodsById[
      this.state.selectedPaymentTypeId
    ];

    if (cardToApply) {
      if (userIsAuthenticated) {
        return actions.setDefaultPayment(
          openTenderRef,
          cardToApply.customer_card_id
        );
      } else {
        return actions.setPaymentMethod(orderRef, 'credit', cardToApply);
      }
    }
  };

  render() {
    const { cancel, paymentMethodsById, variant } = this.props;

    return RegistryLoader(
      {
        confirm: this.handleSubmit,
        cancel,
        paymentMethodsById,
        variant,
        selectedPaymentTypeId: this.state.selectedPaymentTypeId,
        selectExistingPaymentMethod: this.selectExistingPaymentMethod
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentMethod;
