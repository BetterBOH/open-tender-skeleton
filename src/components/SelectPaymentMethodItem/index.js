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
    selectExistingPaymentType: PropTypes.func,
    payment: PaymentModel.propTypes
  };

  static defaultProps = {
    addPaymentMethod: false,
    isSelected: false,
    selectExistingPaymentType: f => f,
    payment: PaymentModel.defaultProps
  };

  render() {
    const {
      brandContext,
      localesContext,
      addPaymentMethod,
      payment,
      isSelected,
      selectExistingPaymentType
    } = this.props;

    return RegistryLoader(
      {
        brandContext,
        localesContext,
        addPaymentMethod,
        payment,
        isSelected,
        selectExistingPaymentType
      },
      'components.SelectPaymentMethodItem',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(withLocales(SelectPaymentMethodItem));
