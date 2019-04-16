import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';
import { getConfig } from 'lib/MutableConfig';
import OrderModel from 'constants/Models/OrderModel';
import ConfigKeys from 'constants/ConfigKeys';
import FlashVariants from 'constants/FlashVariants';
import get from 'utils/get';
const { MESSAGE, ERROR } = FlashVariants;

class PastOrderCard extends PureComponent {
  static propTypes = {
    order: OrderModel.propTypes,
    attemptReorder: PropTypes.func,
    createSystemNotification: PropTypes.func
  };

  static defaultProps = {
    order: OrderModel.defaultProps,
    attemptReorder: f => f,
    createSystemNotification: f => f
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
    const { order } = this.props;

    return RegistryLoader(
      {
        handleAttemptReorder: this.handleAttemptReorder,
        order
      },
      'components.PastOrderCard',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withRouter(PastOrderCard));
