import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import withRoutes from 'lib/withRoutes';
import get from 'utils/get';

import {
  userIsAuthenticated,
  currentLocation,
  lineItemsSubtotal
} from 'state/selectors';

class MiniCart extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func
  };

  static defaultProps = {
    handleClose: f => f
  };

  goToCurrentMenuPath = () => {
    const {
      currentLocation,
      handleClose,
      routesContext,
      history,
      location
    } = this.props;
    const { basename, path, exact } = get(routesContext, 'menus');

    const currentLocationId = get(currentLocation, 'location_id');
    const currentMenuPath = `${basename}/${currentLocationId}`;
    const match = matchPath(location.pathname, {
      path: path,
      exact: exact
    });
    const shouldPushToMenu =
      !match ||
      !get(match, 'params.locationId', '').includes(currentLocationId);

    handleClose();
    if (shouldPushToMenu) {
      history.push(currentMenuPath);
    }
  };

  goToCheckout = () => {
    const { handleClose, routesContext, history } = this.props;
    const { path } = get(routesContext, 'checkout');

    handleClose();
    return history.push(path);
  };

  render() {
    const {
      handleClose,
      localesContext,
      currentOrder,
      lineItemsData,
      currentCustomer,
      currentLocation,
      subtotal
    } = this.props;

    return RegistryLoader(
      {
        handleClose,
        handleAddMore: this.goToCurrentMenuPath,
        handleCheckOut: this.goToCheckout,
        localesContext,
        currentOrder,
        lineItemsData,
        currentCustomer,
        currentLocation,
        subtotal
      },
      'components.MiniCart',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  currentOrder: get(state, 'openTender.session.order.orderData'),
  lineItemsData: get(state, 'openTender.session.order.lineItemsData'),
  currentCustomer: get(state, 'openTender.user'),
  currentLocation: currentLocation(state),
  subtotal: lineItemsSubtotal(state),
  userIsAuthenticated: userIsAuthenticated(state)
});

export default connect(mapStateToProps)(
  withRouter(withRoutes(withLocales(MiniCart)))
);
