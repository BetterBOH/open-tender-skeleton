import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';
import OrderModel from 'constants/Models/OrderModel';
import FlashVariants from 'constants/FlashVariants';

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

  // handleAttemptReorder = () => {
  //   const {
  //     localesContext,
  //     attemptReorder,
  //     order,
  //     createSystemNotification
  //   } = this.props;
  //
  //   /**
  //    * This callback provided to attemptReorder
  //    * gets called after attemptReorder succeeds/fails.
  //    * It returns two bools: isReorderable and itemsWereRemoved
  //    * which the client can use to inform the customer about the
  //    * status of their reorder.
  //    */
  //
  //   function onAttemptReorderEnd({ isReorderable, itemsWereRemoved }) {
  //     if (isReorderable && itemsWereRemoved) {
  //       return createSystemNotification({
  //         message: localesContext.Language.t(
  //           'systemNotification.attemptReorder.success.itemsWereRemoved'
  //         ),
  //         variant: MESSAGE
  //       });
  //     }
  //
  //     if (isReorderable && !itemsWereRemoved) {
  //       return createSystemNotification({
  //         message: localesContext.Language.t(
  //           'systemNotification.attemptReorder.success.reorderSuccessful'
  //         ),
  //         variant: MESSAGE
  //       });
  //     }
  //
  //     if (!isReorderable) {
  //       return createSystemNotification({
  //         message: localesContext.Language.t(
  //           'systemNotification.attemptReorder.error'
  //         ),
  //         variant: ERROR
  //       });
  //     }
  //   }
  //
  //   return attemptReorder(order, onAttemptReorderEnd);
  // };

  render() {
    const { order, onClick } = this.props;

    return RegistryLoader(
      {
        onClick,
        order
      },
      'components.PastOrderCard',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(withRouter(PastOrderCard));
