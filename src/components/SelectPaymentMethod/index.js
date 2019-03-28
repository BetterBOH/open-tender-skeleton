import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    brandContext: PropTypes.object,
    localesContext: PropTypes.object,
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentMethodsById: PropTypes.object,
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func
  };

  static defaultProps = {
    brandContext: {},
    localesContext: {},
    confirm: f => f,
    cancel: f => f,
    paymentMethodsById: {},
    orderRef: {},
    setPaymentMethod: f => f
  };

  constructor(props) {
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
    if (this.state.selectedPaymentTypeId === 'AddPaymentMethod') {
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
    const {
      brandContext,
      localesContext,
      cancel,
      paymentMethodsById
    } = this.props;

    return RegistryLoader(
      {
        brandContext,
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

export default withBrand(withLocales(SelectPaymentMethod));
