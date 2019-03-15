import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class SelectPaymentType extends PureComponent {
  static propTypes = {
    paymentTypes: PropTypes.array
  };

  static defaultProps = {
    paymentTypes: []
  };

  render() {
    const { paymentTypes } = this.props;

    return RegistryLoader(
      { paymentTypes },
      'components.SelectPaymentType',
      () => import('./presentation')
    );
  }
}

export default SelectPaymentType;
