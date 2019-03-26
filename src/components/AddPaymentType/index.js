import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class AddPaymentType extends PureComponent {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  render() {
    const {
      paymentTypes,
      confirm,
      cancel,
      newPaymentMethodType,
      selectPaymentMethodType
    } = this.props;
    return RegistryLoader(
      {
        paymentTypes,
        confirm,
        cancel,
        selectPaymentMethodType,
        newPaymentMethodType
      },
      'components.AddPaymentType',
      () => import('./presentation')
    );
  }
}

export default AddPaymentType;
