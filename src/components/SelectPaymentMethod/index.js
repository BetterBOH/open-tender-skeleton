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
    paymentsById: PropTypes.object,
    orderRef: PropTypes.object,
    setPaymentMethod: PropTypes.func
  };

  static defaultProps = {
    brandContext: {},
    localesContext: {},
    confirm: f => f,
    cancel: f => f,
    paymentsById: {},
    orderRef: {},
    setPaymentMethod: f => f
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
    const { brandContext, localesContext, cancel, paymentsById } = this.props;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        confirm: this.submit,
        cancel,
        paymentsById,
        selectedPaymentTypeId: this.state.selectedPaymentTypeId,
        selectExistingPaymentType: this.selectExistingPaymentType,
        submit: this.submit
      },
      'components.SelectPaymentMethod',
      () => import('./presentation')
    );
  }
}

export default withBrand(withLocales(SelectPaymentMethod));
