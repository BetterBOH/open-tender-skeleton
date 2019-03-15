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
    const { paymentTypes } = this.props;

    return RegistryLoader({ paymentTypes }, 'components.AddPaymentType', () =>
      import('./presentation')
    );
  }
}

export default AddPaymentType;
