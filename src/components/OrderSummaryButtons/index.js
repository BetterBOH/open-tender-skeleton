import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';
import FlashVariants from 'constants/FlashVariants';
import get from 'utils/get';
const { MESSAGE, ERROR } = FlashVariants;

class OrderSummaryButtons extends PureComponent {
  static propTypes = {
    orderIsPending: PropTypes.bool,
    userIsAuthenticated: PropTypes.bool,
    attemptReorder: PropTypes.func,
    createSystemNotification: PropTypes.func
  };

  static defaultProps = {
    orderIsPending: true,
    userIsAuthenticated: false,
    attemptReorder: f => f,
    createSystemNotification: f => f
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
    const {
      localesContext,
      attemptReorder,
      order,
      createSystemNotification
    } = this.props;

    /**
     * This callback provided to attemptReorder
     * gets called after attemptReorder succeeds/fails.
     * It returns two bools: isReorderable and itemsWereRemoved
     * which the client can use to inform the customer about the
     * status of their reorder.
     */

    function onAttemptReorderEnd({ isReorderable, itemsWereRemoved }) {
      if (isReorderable && itemsWereRemoved) {
        return createSystemNotification({
          message: localesContext.Language.t(
            'systemNotification.attemptReorder.success.itemsWereRemoved'
          ),
          variant: MESSAGE
        });
      }

      if (isReorderable && !itemsWereRemoved) {
        return createSystemNotification({
          message: localesContext.Language.t(
            'systemNotification.attemptReorder.success.reorderSuccessful'
          ),
          variant: MESSAGE
        });
      }

      if (!isReorderable) {
        return createSystemNotification({
          message: localesContext.Language.t(
            'systemNotification.attemptReorder.error'
          ),
          variant: ERROR
        });
      }
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

export default withLocales(withRouter(OrderSummaryButtons));
