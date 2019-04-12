import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';
import get from 'utils/get';

class OrderSummaryButtons extends PureComponent {
  static propTypes = {
    orderIsPending: PropTypes.bool,
    userIsAuthenticated: PropTypes.bool
  };

  static defaultProps = {
    orderIsPending: true,
    userIsAuthenticated: false
  };

  handleGoBack = () => {
    const { userIsAuthenticated, history } = this.props;
    const dashboardPath = get(getConfig(ConfigKeys.ROUTES), 'dashboard.path');

    if (userIsAuthenticated) {
      return history.push(dashboardPath);
    }

    return history.push('/');
  };

  handleAttemptReorder = () => {
    const { attemptReorder, order } = this.props;

    function onEnd(res) {
      console.log(res);
    }

    return attemptReorder(order, onEnd);
  };

  render() {
    const { orderIsPending, handleGoBack } = this.props;

    return RegistryLoader(
      { orderIsPending, handleGoBack },
      'components.OrderSummaryButtons',
      () => import('./presentation.js')
    );
  }
}

export default withRouter(OrderSummaryButtons);
