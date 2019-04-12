import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';
import get from 'utils/get';

const OrderSummaryButtons = React.memo(
  ({ orderIsPending, userIsAuthenticated, push }) => {
    const handleGoBack = () => {
      const dashboardPath = get(getConfig(ConfigKeys.ROUTES), 'dashboard.path');

      if (userIsAuthenticated) {
        return push(dashboardPath);
      }

      return push('/');
    };

    return RegistryLoader(
      { orderIsPending, handleGoBack },
      'components.OrderSummaryButtons',
      () => import('./presentation.js')
    );
  }
);

OrderSummaryButtons.propTypes = {
  orderIsPending: PropTypes.bool,
  push: PropTypes.func,
  userIsAuthenticated: PropTypes.bool
};

OrderSummaryButtons.defaultProps = {
  orderIsPending: true,
  push: f => f,
  userIsAuthenticated: false
};

export default OrderSummaryButtons;
