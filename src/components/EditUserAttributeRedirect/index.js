import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { withRouter } from 'react-router-dom';
import getRoutes from 'utils/getRoutes';

class EditUserAttributeRedirect extends PureComponent {
  static propTypes = {
    handleClickCheckoutAsGuest: PropTypes.func,
    onClose: PropTypes.func
  };

  static defaultProps = {
    handleClickCheckoutAsGuest: f => f,
    onClose: f => f
  };

  goToDashboard = () => {
    const { onClose, history } = this.props;
    const dashboardPath = getRoutes().DASHBOARD;

    onClose();
    return history.push(dashboardPath);
  };

  handleClickCheckoutAsGuest = () => {
    const { onClose } = this.props;

    onClose();
    return this.props.handleClickCheckoutAsGuest();
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

export default withRouter(EditUserAttributeRedirect);
