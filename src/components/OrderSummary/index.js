import React from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

import CustomerModel from 'constants/Models/CustomerModel';
import withLocales from 'lib/withLocales';

const OrderSummary = React.memo(props =>
  RegistryLoader(props, 'components.OrderSummary', () =>
    import('./presentation.js')
  )
);

OrderSummary.propTypes = {
  serviceType: PropTypes.string,
  orderTime: PropTypes.string,
  locationName: PropTypes.string,
  locationImage: PropTypes.string,
  customer: CustomerModel.propTypes
};

OrderSummary.defaultProps = {};

export default withLocales(OrderSummary);
