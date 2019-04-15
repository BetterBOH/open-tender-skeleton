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
    userIsAuthenticated: PropTypes.bool,
    attemptReorder: PropTypes.func
  };

  static defaultProps = {
    orderIsPending: true,
    userIsAuthenticated: false,
    attemptReorder: f => f
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

    /**
     * This callback provided to attemptReorder
     * gets called after attemptReorder succeeds/fails.
     * It returns two bools: isReorderable and itemsWereRemoved
     * which the client can use to inform the customer about the
     * status of their reorder.
     */

    function onAttemptReorderEnd({ isReorderable, itemsWereRemoved }) {
      console.log('hello');
    }

    return attemptReorder(order, onAttemptReorderEnd);
  };

  render() {
    const { orderIsPending } = this.props;

    return RegistryLoader(
      {
        orderIsPending,
        handleGoBack: this.handleGoBack,
        handleAttemptReorder: this.handleAttemptReorder
      },
      'components.OrderSummaryButtons',
      () => import('./presentation.js')
    );
  }
}

export default withRouter(OrderSummaryButtons);
