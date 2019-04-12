import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import { ADD_PAYMENT_METHOD } from 'constants/PaymentMethods';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      setPaymentType: PropTypes.func
    }),
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentMethodsById: PropTypes.object,
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func
  };

  static defaultProps = {
    confirm: f => f,
    cancel: f => f,
    paymentMethodsById: {},
    orderRef: {},
    actions: {
      setPaymentMethod: f => f
    }
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
    const { actions, orderRef } = this.props;

    if (this.state.selectedPaymentTypeId === ADD_PAYMENT_METHOD) {
      return this.props.confirm();
    }

    const cardToApply = this.props.paymentMethodsById[
      this.state.selectedPaymentTypeId
    ];

    if (cardToApply) {
      return actions.setPaymentMethod(orderRef, 'credit', cardToApply);
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
