import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';
import OrderModel from 'constants/Models/OrderModel';
import withLocales from 'lib/withLocales';

class OrderDetails extends PureComponent {
  static propTypes = {
    order: OrderModel.propTypes
  };

  static defaultProps = {
    order: OrderModel.defaultProps
  };

  render() {
    const { order, localesContext } = this.props;

    const requestedDate = get(order, 'requested_date', '');
    const requestedTime = get(order, 'requested_time', '');
    const requestedDateAndTime =
      !!requestedDate && !!requestedTime
        ? `${requestedDate} at ${requestedTime}`
        : '';

    const cardType = get(order, 'credit_card.card_type', '');
    const last4 = get(order, 'credit_card.last4', '');
    const cardUsed =
      !!cardType && !!last4
        ? `${cardType} ${localesContext.Language.t('order.ccEndingIn')}${last4}`
        : '';

    const formattedOrderDetails = [
      {
        label: localesContext.Language.t('order.service'),
        icon: 'Bag',
        value: get(order, 'service_type_str', ''),
        children: null
      },
      {
        label: localesContext.Language.t('order.location'),
        icon: 'Marker',
        value: get(order, 'location_name', ''),
        children: null
      },
      {
        label: localesContext.Language.t('order.pickupTime'),
        icon: 'Clock',
        value: requestedDateAndTime,
        children: null
      },
      {
        label: localesContext.Language.t('order.contact'),
        icon: 'Phone',
        value: get(order, 'phone', ''),
        children: null
      },
      {
        label: localesContext.Language.t('order.payment'),
        icon: 'CreditCard',
        value: cardUsed,
        children: null
      }
    ];

    return RegistryLoader(
      { formattedOrderDetails },
      'components.OrderDetails',
      () => import('./presentation.js')
    );
  }
}

export default withLocales(OrderDetails);
