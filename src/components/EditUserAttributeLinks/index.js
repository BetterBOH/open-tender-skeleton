import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import { withRouter } from 'react-router-dom';
import getRoutes from 'utils/getRoutes';

class EditUserAttributeLinks extends PureComponent {
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

  render() {
    return RegistryLoader(
      {
        goToDashboard: this.goToDashboard
      },
      'components.EditUserAttributeLinks',
      () => import('./presentation.js')
    );
  }
}

export default withRouter(EditUserAttributeLinks);
