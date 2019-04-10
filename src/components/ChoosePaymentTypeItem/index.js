import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class ChoosePaymentTypeItem extends PureComponent {
  static propTypes = {
    paymentType: PropTypes.string,
    isSelected: PropTypes.bool,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    paymentType: '',
    isSelected: false,
    selectPaymentMethodType: f => f
  };

  render() {
    const { paymentType, isSelected, selectPaymentMethodType } = this.props;

    return RegistryLoader(
      {
        paymentType,
        isSelected,
        selectPaymentMethodType
      },
      'components.ChoosePaymentTypeItem',
      () => import('./presentation.js')
    );
  }
}

export default ChoosePaymentTypeItem;
