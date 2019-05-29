import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import PaymentModel from 'constants/Models/PaymentModel';

class SelectPaymentMethodItem extends PureComponent {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isAddPaymentMethod: PropTypes.bool,
    isSelected: PropTypes.bool,
    paymentMethod: PaymentModel.propTypes,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    id: '',
    isAddPaymentMethod: false,
    isSelected: false,
    paymentMethod: PaymentModel.defaultProps,
    onSelect: f => f
  };

  render() {
    const {
      id,
      isAddPaymentMethod,
      isSelected,
      paymentMethod,
      onSelect
    } = this.props;

    return RegistryLoader(
      {
        id,
        isAddPaymentMethod,
        isSelected,
        paymentMethod,
        onSelect
      },
      'components.SelectPaymentMethodItem',
      () => import('./presentation.js')
    );
  }
}

export default SelectPaymentMethodItem;
