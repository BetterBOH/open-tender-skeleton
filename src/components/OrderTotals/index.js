import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';

import PropTypes from 'prop-types';
import withLocales from 'lib/withLocales';

const OrderTotals = React.memo(({ data }) => {
  return RegistryLoader({ data }, 'components.OrderTotals', () =>
    import('./presentation.js')
  );
});

OrderTotals.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      price: PropTypes.string
    })
  )
};

OrderTotals.defaultProps = {
  data: []
};

export default withLocales(OrderTotals);
