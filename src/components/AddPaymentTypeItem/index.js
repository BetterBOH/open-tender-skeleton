import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

import RegistryLoader from 'lib/RegistryLoader';
// import get from 'utils/get';

class AddPaymentTypeItem extends PureComponent {
  static propTypes = {
    paymentType: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    paymentType: '',
    onClick: f => f
  };

  render() {
    const {
      brandContext,
      localesContext,
      paymentType,
      onClick,
      isSelected,
      selectPaymentMethodType
    } = this.props;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        paymentType,
        onClick,
        isSelected,
        selectPaymentMethodType
      },
      'components.AddPaymentTypeItem',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(withLocales(AddPaymentTypeItem));
