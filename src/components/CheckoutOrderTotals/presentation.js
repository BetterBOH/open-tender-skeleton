import React from 'react';

import { OrderTotals } from 'components';

const CheckoutOrderTotals = React.memo(({ orderTotalsData }) => (
  <OrderTotals data={orderTotalsData} />
));

export default CheckoutOrderTotals;
