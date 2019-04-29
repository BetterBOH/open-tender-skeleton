import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import { Status } from 'brandibble-redux';
import { withRouter } from 'react-router-dom';
import getLocationSlug from 'utils/getLocationSlug';

import OpenTenderRefModel from 'constants/Models/OpenTenderRefModel';
import OrderRefModel from 'constants/Models/OrderRefModel';
import LocationModel from 'constants/Models/LocationModel';

const CheckoutButtons = React.memo(
  ({
    currentLocation,
    history,
    openTenderRef,
    orderRef,
    submitOrder,
    canSubmitOrder,
    submitOrderStatus
  }) => {
    const handleBackToMenu = () => {
      const slug = getLocationSlug(currentLocation);

      return history.push(`/menus/${slug}`);
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
        canSubmitOrder,
        submitOrderStatus
      },
      'components.CheckoutButtons',
      () => import('./presentation.js')
    );
  }
);

CheckoutButtons.propTypes = {
  currentLocation: LocationModel.propTypes,
  openTenderRef: OpenTenderRefModel.propTypes,
  orderRef: OrderRefModel.propTypes,
  canSubmitOrder: PropTypes.bool,
  submitOrder: PropTypes.func,
  submitOrderStatus: PropTypes.string
};

CheckoutButtons.defaultProps = {
  currentLocation: LocationModel.defaultProps,
  openTenderRef: OpenTenderRefModel.defaultProps,
  orderRef: OrderRefModel.defaultProps,
  canSubmiteOrder: false,
  submitOrder: f => f,
  submitOrderStatus: Status.IDLE
};

export default withRouter(CheckoutButtons);
