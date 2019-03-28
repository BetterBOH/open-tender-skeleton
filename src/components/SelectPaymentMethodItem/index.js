import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';
import PaymentModel from 'constants/Models/PaymentModel';

class SelectPaymentMethodItem extends PureComponent {
  static propTypes = {
    addPaymentMethod: PropTypes.bool,
    isSelected: PropTypes.bool,
    selectExistingPaymentMethod: PropTypes.func,
    paymentMethod: PaymentModel.propTypes
  };

  static defaultProps = {
    addPaymentMethod: false,
    isSelected: false,
    selectExistingPaymentMethod: f => f,
    paymentMethod: PaymentModel.defaultProps
  };

  render() {
    const {
      brandContext,
      localesContext,
      addPaymentMethod,
      paymentMethod,
      isSelected,
      selectExistingPaymentMethod
    } = this.props;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        addPaymentMethod,
        paymentMethod,
        isSelected,
        selectExistingPaymentMethod
      },
      'components.SelectPaymentMethodItem',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(withLocales(SelectPaymentMethodItem));