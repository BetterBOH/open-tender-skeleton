import React from 'react';
import PropTypes from 'prop-types';
import get from 'utils/get';
import RegistryLoader from 'lib/RegistryLoader';
import { withRouter } from 'react-router-dom';
import withLocales from 'lib/withLocales';
import withRoutes from 'lib/withRoutes';

const CheckoutButtons = React.memo(
  ({
    localesContext,
    currentLocationId,
    history,
    routesContext,
    openTenderRef,
    orderRef,
    submitOrder,
    canSubmitOrder
  }) => {
    const handleBackToMenu = () => {
      const { basename, path, exact } = get(routesContext, 'menus');
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
        localesContext,
        handleBackToMenu,
        handleSubmitOrder,
        canSubmitOrder
      },
      'components.CheckoutButtons',
      () => import('./presentation.js')
    );
  }
);

CheckoutButtons.propTypes = {};

CheckoutButtons.defaultProps = {};

export default withLocales(withRoutes(withRouter(CheckoutButtons)));
