import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

class ChoosePaymentType extends PureComponent {
  static propTypes = {
    localesContext: PropTypes.object,
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    paymentTypes: PropTypes.array,
    newPaymentMethodType: PropTypes.string,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    localesContext: {},
    confirm: f => f,
    cancel: f => f,
    paymentTypes: [],
    newPaymentMethodType: '',
    selectPaymentMethodType: f => f
  };

  render() {
    const {
      localesContext,
      paymentTypes,
      confirm,
      cancel,
      newPaymentMethodType,
      selectPaymentMethodType
    } = this.props;
    return RegistryLoader(
      {
        localesContext,
        paymentTypes,
        confirm,
        cancel,
        selectPaymentMethodType,
        newPaymentMethodType
      },
      'components.ChoosePaymentType',
      () => import('./presentation')
    );
  }
}

export default withLocales(ChoosePaymentType);
