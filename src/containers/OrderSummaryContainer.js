import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'utils/get';
import isEmpty from 'lodash/isEmpty';

import {
  Status,
  fetchAllCustomerOrders,
  fetchLocation,
  attemptReorder
} from 'brandibble-redux';
import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';
import { userIsAuthenticated } from 'state/selectors';
import getRoutes from 'utils/getRoutes';

class OrderSummaryContainer extends ContainerBase {
  view = import('views/OrderSummaryView');

  componentDidUpdate(prevProps) {
    const { history } = this.props;

    if (
      get(prevProps, 'attemptReorderStatus') === Status.PENDING &&
      get(this, 'props.attemptReorderStatus') === Status.FULFILLED
    ) {
      history.push(getRoutes().CHECKOUT);
    }
  }

  redirectHome = () => {
    const { history } = this.props;

    return history.push(getRoutes().WELCOME);
  };

  model = () => {
    const { actions, openTenderRef } = this.props;
    const userIsAuthenticated = get(this, 'props.userIsAuthenticated');
    const orderId = parseInt(get(this, 'props.match.params.orderId'), 10);

    /* Guest Customer */
    const recentOrder = get(this, 'props.recentOrder');

    if (!userIsAuthenticated) {
      if (
        !isEmpty(recentOrder) &&
        orderId === parseInt(get(recentOrder, 'orders_id'), 10)
      ) {
        const locationId = get(recentOrder, 'location_id');

        return Promise.all([
          Promise.resolve(recentOrder),
          actions.fetchLocation(openTenderRef, locationId)
        ]).then(res => {
          const [order, locationResponse] = res;
          const location = get(locationResponse, 'value');

          return [order, location];
        });
      }

      return this.redirectHome();
    }

    /* Authenticated Customer */
    const customerId = get(
      this,
      'props.currentCustomer.attributes.customer_id'
    );
    const withItemDetails = true;

    return actions
      .fetchAllCustomerOrders(openTenderRef, customerId, withItemDetails)
      .then(res => {
        const customerOrders = get(res, 'value.data', []);
        const order = customerOrders.find(
          customerOrder =>
            orderId === parseInt(get(customerOrder, 'orders_id'), 10)
        );

        if (!order) {
          return null;
        }

        const orderLocationId = get(order, 'location_id');
        return actions
          .fetchLocation(openTenderRef, orderLocationId)
          .then(res => {
            const orderLocation = get(res, 'value');

            return [order, orderLocation];
          });
      });
  };

  afterModel = model => {
    if (!model || !model.length) {
      return this.redirectHome();
    }
  };
}

const mapStateToProps = state => ({
  userIsAuthenticated: userIsAuthenticated(state),
  openTenderRef: get(state, 'openTender.ref'),
  recentOrder: get(state, 'openTender.data.customerOrders.recentSubmission'),
  currentCustomer: get(state, 'openTender.user'),
  attemptReorderStatus: get(state, 'openTender.status.attemptReorder')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchAllCustomerOrders,
      fetchLocation,
      attemptReorder,
      createSystemNotification
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummaryContainer);
