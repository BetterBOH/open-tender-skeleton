import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import OrderRefModel from 'constants/Models/OrderRefModel';

import RegistryLoader from 'lib/RegistryLoader';
import { ADD_PAYMENT_METHOD } from 'constants/PaymentMethods';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      setPaymentMethod: PropTypes.func,
      setDefaultPayment: PropTypes.func
    }),
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentMethodsById: PropTypes.object,
    orderRef: OrderRefModel.propTypes,
    userIsAuthenticated: PropTypes.bool
  };

  static defaultProps = {
    confirm: f => f,
    cancel: f => f,
    paymentMethodsById: {},
    orderRef: OrderRefModel.defaultProps,
    actions: {
      setPaymentMethod: f => f,
      setDefaultPayment: f => f
    },
    userIsAuthenticated: false
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
    const { actions, openTenderRef, userIsAuthenticated } = this.props;

    if (this.state.selectedPaymentTypeId === ADD_PAYMENT_METHOD) {
      return this.props.confirm();
    }

    const cardToApply = this.props.paymentMethodsById[
      this.state.selectedPaymentTypeId
    ];

    if (cardToApply && userIsAuthenticated) {
      return actions.setDefaultPayment(
        openTenderRef,
        cardToApply.customer_card_id
      );
    }
  };

  render() {
    const { cancel, paymentMethodsById } = this.props;

    return RegistryLoader(
      {
        confirm: this.handleSubmit,
        cancel,
        paymentMethodsById,
        selectedPaymentTypeId: this.state.selectedPaymentTypeId,
        selectExistingPaymentMethod: this.selectExistingPaymentMethod
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentMethod;
