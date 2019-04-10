import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

const OrderSummaryButtons = React.memo(({ localesContext, orderIsPending }) =>
  RegistryLoader(
    { localesContext, orderIsPending },
    'components.OrderSummaryButtons',
    () => import('./presentation.js')
  )
);

OrderSummaryButtons.propTypes = {
  orderIsPending: PropTypes.bool
};

OrderSummaryButtons.defaultProps = {
  orderIsPending: true
};

export default withLocales(OrderSummaryButtons);
