import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

import RegistryLoader from 'lib/RegistryLoader';
// import get from 'utils/get';

class SelectPaymentMethodItem extends PureComponent {
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
      payment,
      onClick,
      selectedPaymentTypeId,
      selectExistingPaymentType,
      isSelected,
      addPaymentMethod
    } = this.props;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        payment,
        onClick,
        selectedPaymentTypeId,
        selectExistingPaymentType,
        isSelected,
        addPaymentMethod
      },
      'components.SelectPaymentMethodItem',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(withLocales(SelectPaymentMethodItem));
