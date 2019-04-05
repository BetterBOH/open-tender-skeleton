import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

const CheckoutOrderTotals = React.memo(({ checkoutOrderTotalsData }) => {
  const data = [
    {
      label: 'Subtotal + tax',
      price: get(checkoutOrderTotalsData, 'subtotalWithTax')
    },
    {
      label: 'Rewards',
      price: get(checkoutOrderTotalsData, 'discount')
    },
    {
      label: 'Total',
      price: get(checkoutOrderTotalsData, 'total')
    }
  ];

  return RegistryLoader({ data }, 'components.CheckoutOrderTotals', () =>
    import('./presentation.js')
  );
});

CheckoutOrderTotals.propTypes = {
  subtotalWithTax: PropTypes.string,
  rewards: PropTypes.string,
  total: PropTypes.string
};

CheckoutOrderTotals.defaultProps = {
  subtotalWithTax: '',
  rewards: '',
  total: ''
};

export default withLocales(CheckoutOrderTotals);
