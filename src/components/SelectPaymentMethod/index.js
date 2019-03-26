import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class SelectPaymentMethod extends PureComponent {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedPaymentTypeId: ''
    };
  }

  selectExistingPaymentType = id => {
    this.setState({
      selectedPaymentTypeId: id
    });
  };

  submit = () => {
    if (this.state.selectedPaymentTypeId === 'AddPaymentMethod') {
      this.props.confirm();
      return;
    }
    const cardToApply = this.props.paymentsById[
      this.state.selectedPaymentTypeId
    ];
    if (cardToApply)
      this.props.setPaymentMethod(this.props.orderRef, 'credit', cardToApply);
  };

  render() {
    const {
      confirm,
      cancel,
      paymentsById,
      selectedPaymentTypeId,
      setPaymentMethod
    } = this.props;

    return RegistryLoader(
      {
        confirm,
        cancel,
        paymentsById,
        selectedPaymentTypeId: this.state.selectedPaymentTypeId,
        selectExistingPaymentType: this.selectExistingPaymentType,
        setPaymentMethod,
        submit: this.submit
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentMethod;
