import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';

class ChoosePaymentTypeItem extends PureComponent {
  static propTypes = {
    localesContext: PropTypes.object,
    paymentType: PropTypes.string,
    isSelected: PropTypes.bool,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    localesContext: {},
    paymentType: '',
    isSelected: false,
    selectPaymentMethodType: f => f
  };

  render() {
    const {
      localesContext,
      paymentType,
      isSelected,
      selectPaymentMethodType
    } = this.props;

    return RegistryLoader(
      {
        localesContext,
        paymentType,
        isSelected,
        selectPaymentMethodType
      },
      'components.ChoosePaymentTypeItem',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(ChoosePaymentTypeItem);
