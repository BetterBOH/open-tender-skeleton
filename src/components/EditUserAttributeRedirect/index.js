import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unauthenticateUser } from 'brandibble-redux';
import { withRouter } from 'react-router-dom';

import get from 'utils/get';
import getRoutes from 'utils/getRoutes';

class EditUserAttributeRedirect extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func
  };

  static defaultProps = {
    onClose: f => f
  };

  goToDashboard = () => {
    const { onClose, history } = this.props;
    const dashboardPath = getRoutes().DASHBOARD;

    onClose();
    return history.push(dashboardPath);
  };

  handleClickCheckoutAsGuest = () => {
    const { onClose, actions, openTenderRef } = this.props;

    onClose();
    return actions.unauthenticateUser(openTenderRef);
  };

  render() {
    return RegistryLoader(
      {
        goToDashboard: this.goToDashboard,
        handleClickCheckoutAsGuest: this.handleClickCheckoutAsGuest
      },
      'components.EditUserAttributeRedirect',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      unauthenticateUser
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditUserAttributeRedirect));
