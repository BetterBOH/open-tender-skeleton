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
    defaultPaymentMethodId: PropTypes.string
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
    defaultPaymentMethodId: ''
  };

  constructor(props) {
    super(...arguments);
    this.state = {
      selectedPaymentTypeId: props.defaultPaymentMethodId,
      updateDefaultPaymentType: false
    };
    console.log(props);
  }

  selectExistingPaymentMethod = id => {
    if (id === ADD_PAYMENT_METHOD) {
      return this.setState({
        selectedPaymentTypeId: id,
        updateDefaultPaymentType: false
      });
    } else {
      return this.setState({
        selectedPaymentTypeId: id
      });
    }
  };

  selectOptionToUpdateDefaultPayment = () => {
    const selectedPaymentTypeId = this.state.selectedPaymentTypeId;

    if (
      selectedPaymentTypeId === ADD_PAYMENT_METHOD ||
      !selectedPaymentTypeId
    ) {
      return null;
    }

    this.setState((state, props) => {
      return {
        updateDefaultPaymentType: !state.updateDefaultPaymentType
      };
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
      debugger;
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
      !!this.state.selectedPaymentTypeId &&
      this.state.updateDefaultPaymentType
    ) {
      return this.handleSetDefault();
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
    const { cancel, paymentMethodsById, variant } = this.props;
    const { updateDefaultPaymentType, selectedPaymentTypeId } = this.state;

    return RegistryLoader(
      {
        confirm: this.handleSubmit,
        cancel,
        paymentMethodsById,
        variant,
        updateDefaultPaymentType,
        selectedPaymentTypeId,
        selectExistingPaymentMethod: this.selectExistingPaymentMethod,
        selectOptionToUpdateDefaultPayment: this
          .selectOptionToUpdateDefaultPayment
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentMethod;
