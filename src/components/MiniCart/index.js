import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
import get from 'utils/get';

import { userIsAuthenticated, lineItemsSubtotal } from 'state/selectors';

class MiniCart extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func
  };

  static defaultProps = {
    handleClose: f => f
  };

  render() {
    const { handleClose, localesContext, subtotal } = this.props;

    console.log(subtotal);

    return RegistryLoader(
      { handleClose, localesContext },
      'components.MiniCart',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  currentOrder: get(state, 'openTender.session.order.orderData'),
  lineItemsData: get(state, 'openTender.session.order.lineItemsData'),
  currentCustomer: get(state, 'openTender.user'),
  subtotal: lineItemsSubtotal(state),
  userIsAuthenticated: userIsAuthenticated(state)
});

export default connect(mapStateToProps)(withLocales(MiniCart));
