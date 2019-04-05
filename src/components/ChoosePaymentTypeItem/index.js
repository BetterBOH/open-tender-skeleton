import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';

class ChoosePaymentTypeItem extends PureComponent {
  static propTypes = {
    brandContext: PropTypes.object,
    localesContext: PropTypes.object,
    paymentType: PropTypes.string,
    isSelected: PropTypes.bool,
    selectPaymentMethodType: PropTypes.func
  };

  static defaultProps = {
    brandContext: {},
    localesContext: {},
    paymentType: '',
    isSelected: false,
    selectPaymentMethodType: f => f
  };

  render() {
    const {
      brandContext,
      localesContext,
      paymentType,
      isSelected,
      selectPaymentMethodType
    } = this.props;

    return RegistryLoader(
      {
        brandContext,
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

export default withBrand(withLocales(ChoosePaymentTypeItem));
