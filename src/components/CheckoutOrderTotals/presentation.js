import React from 'react';

import { OrderTotals } from 'components';

const CheckoutOrderTotals = React.memo(({ data }) => (
  <OrderTotals data={data} />
));

export default CheckoutOrderTotals;
