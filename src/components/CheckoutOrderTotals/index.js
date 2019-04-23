import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

const CheckoutOrderTotals = React.memo(
  ({ localesContext, checkoutOrderTotalsData }) => {
    const { Language } = localesContext;
    const orderTotalsData = [
      {
        label: Language.t('checkout.subtotalWithTax'),
        price: get(checkoutOrderTotalsData, 'subtotalWithTax')
      },
      {
        label: Language.t('checkout.rewards'),
        price: get(checkoutOrderTotalsData, 'discount')
      },
      {
        label: Language.t('checkout.total'),
        price: get(checkoutOrderTotalsData, 'total')
      }
    ];

    return RegistryLoader(
      { orderTotalsData },
      'components.CheckoutOrderTotals',
      () => import('./presentation.js')
    );
  }
);

CheckoutOrderTotals.propTypes = {
  subtotalWithTax: PropTypes.string,
  discount: PropTypes.string,
  total: PropTypes.string
};

CheckoutOrderTotals.defaultProps = {
  subtotalWithTax: '',
  discount: '',
  total: ''
};

export default withLocales(CheckoutOrderTotals);
