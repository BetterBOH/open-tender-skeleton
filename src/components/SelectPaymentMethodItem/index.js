import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import PaymentModel from 'constants/Models/PaymentModel';

class SelectPaymentMethodItem extends PureComponent {
  static propTypes = {
    addPaymentMethod: PropTypes.bool,
    isSelected: PropTypes.bool,
    selectExistingPaymentMethod: PropTypes.func,
    paymentMethod: PaymentModel.propTypes,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
  };

  static defaultProps = {
    addPaymentMethod: false,
    isSelected: false,
    selectExistingPaymentMethod: f => f,
    paymentMethod: PaymentModel.defaultProps,
    id: ''
  };

  render() {
    const {
      addPaymentMethod,
      paymentMethod,
      isSelected,
      selectExistingPaymentMethod,
      id
    } = this.props;

    return RegistryLoader(
      {
        addPaymentMethod,
        paymentMethod,
        isSelected,
        selectExistingPaymentMethod,
        id
      },
      'components.SelectPaymentMethodItem',
      () => import('./presentation.js')
    );
  }
}

export default SelectPaymentMethodItem;
