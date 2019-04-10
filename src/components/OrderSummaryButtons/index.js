import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

const OrderSummaryButtons = React.memo(props =>
  RegistryLoader(props, 'components.OrderSummaryButtons', () =>
    import('./presentation.js')
  )
);

OrderSummaryButtons.propTypes = {};

OrderSummaryButtons.defaultProps = {};

export default withLocales(OrderSummaryButtons);
