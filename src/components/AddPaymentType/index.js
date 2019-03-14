import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class AddPaymentType extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return RegistryLoader({}, 'components.AddPaymentType', () =>
      import('./presentation')
    );
  }
}

export default AddPaymentType;
