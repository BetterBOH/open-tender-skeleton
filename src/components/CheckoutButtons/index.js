import React from 'react';
import PropTypes from 'prop-types';
import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import OrderRefModel from 'constants/Models/OrderRefModel';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import { withRouter } from 'react-router-dom';
import withRoutes from 'lib/withRoutes';

const CheckoutButtons = React.memo(
  ({
    currentLocationId,
    history,
    routesContext,
    openTenderRef,
    orderRef,
    submitOrder,
    canSubmitOrder
  }) => {
    const handleBackToMenu = () => {
      const { basename } = get(routesContext, 'menus');
      const currentMenuPath = `${basename}/${currentLocationId}`;

      return history.push(currentMenuPath);
    };

    const handleSubmitOrder = () => {
      return submitOrder(openTenderRef, orderRef, {
        authenticateNewCustomer: true,
        includeItemDetails: true
      });
    };

    return RegistryLoader(
      {
        handleBackToMenu,
        handleSubmitOrder,
        canSubmitOrder
      },
      'components.CheckoutButtons',
      () => import('./presentation.js')
    );
  }
);

CheckoutButtons.propTypes = {
  currentLocationId: PropTypes.number,
  openTenderRef: OpenTenderRefModel.propTypes,
  orderRef: OrderRefModel.propTypes,
  canSubmitOrder: PropTypes.bool,
  submitOrder: PropTypes.func
};

CheckoutButtons.defaultProps = {
  currentLocationId: null,
  openTenderRef: OpenTenderRefModel.defaultProps,
  orderRef: OrderRefModel.defaultProps,
  canSubmiteOrder: false,
  submitOrder: f => f
};

export default withRoutes(withRouter(CheckoutButtons));
