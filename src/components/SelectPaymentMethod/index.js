import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import { AddPaymentMethod } from 'constants/PaymentDrawer';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    localesContext: PropTypes.object,
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentMethodsById: PropTypes.object,
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func
  };

  static defaultProps = {
    localesContext: {},
    confirm: f => f,
    cancel: f => f,
    paymentMethodsById: {},
    orderRef: {},
    setPaymentMethod: f => f
  };

  constructor() {
    super(...arguments);
    this.state = {
      selectedPaymentTypeId: ''
    };
  }

  selectExistingPaymentMethod = id => {
    this.setState({
      selectedPaymentTypeId: id
    });
  };

  submit = () => {
    if (this.state.selectedPaymentTypeId === AddPaymentMethod) {
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
    const { localesContext, cancel, paymentMethodsById } = this.props;

    return RegistryLoader(
      {
        localesContext,
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

export default withLocales(SelectPaymentMethod);
