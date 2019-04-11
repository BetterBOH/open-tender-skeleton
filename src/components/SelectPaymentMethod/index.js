import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import { Stages } from 'constants/PaymentMethods';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
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
    setPaymentMethod: f => f
  };

  state = {
    selectedPaymentTypeId: ''
  };

  selectExistingPaymentMethod = id => {
    this.setState({
      selectedPaymentTypeId: id
    });
  };

  submit = () => {
    if (this.state.selectedPaymentTypeId === Stages.AddPaymentMethod) {
      return this.props.confirm();
    }

    const cardToApply = this.props.paymentMethodsById[
      this.state.selectedPaymentTypeId
    ];

    if (cardToApply) {
      return this.props.setPaymentMethod(
        this.props.orderRef,
        'credit',
        cardToApply
      );
    }
  };

  render() {
    const { cancel, paymentMethodsById } = this.props;

    return RegistryLoader(
      {
        confirm: this.submit,
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
