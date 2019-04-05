import React from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { withRouter } from 'react-router-dom';
import withLocales from 'lib/withLocales';
import withRoutes from 'lib/withRoutes';

const CheckoutButtons = React.memo(
  ({ localesContext, history, routesContext, canSubmitOrder }) => {
    const backToMenu = () => {
      const { basename, path, exact } = get(routesContext, 'menus');

      const currentLocationId = get(currentLocation, 'location_id');
      const currentMenuPath = `${basename}/${currentLocationId}`;

      return history.push(currentMenuPath);
    };

    const submitOrder = () => {
      console.log('submit');
    };

    return RegistryLoader(
      {
        localesContext,
        handleBackToMenu: backToMenu,
        handleSubmit: submitOrder,
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
