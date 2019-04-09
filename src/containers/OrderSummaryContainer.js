import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'utils/get';
import isEmpty from 'lodash/isEmpty';

import { fetchAllCustomerOrders } from 'brandibble-redux';
import { userIsAuthenticated } from 'state/selectors';

class OrderSummaryContainer extends ContainerBase {
  view = import('views/OrderSummaryView');

  redirectHome = () => {
    const { history } = this.props;
    return history.push('/');
  };

  model = () => {
    const userIsAuthenticated = get(this, 'props.userIsAuthenticated');
    const orderId = parseInt(get(this, 'props.match.params.orderId'), 10);

    /* Guest Customer */
    const recentOrder = get(this, 'props.recentOrder');

    if (!userIsAuthenticated) {
      if (
        !isEmpty(recentOrder) &&
        orderId === parseInt(get(recentOrder, 'orders_id'), 10)
      ) {
        return Promise.resolve(recentOrder);
      }

      return this.redirectHome();
    }

    /* Authenticated Customer */
    const fetchAllCustomerOrders = get(
      this,
      'props.actions.fetchAllCustomerOrders'
    );
    const openTenderRef = get(this, 'props.openTenderRef');
    const customerId = get(
      this,
      'props.currentCustomer.attributes.customer_id'
    );
    const withItemDetails = true;

    return fetchAllCustomerOrders(
      openTenderRef,
      customerId,
      withItemDetails
    ).then(res => {
      const customerOrders = get(res, 'value.data', []);

      return customerOrders.find(
        customerOrder =>
          orderId === parseInt(get(customerOrder, 'orders_id'), 10)
      );
    });
  };

  afterModel = model => {
    if (!model) {
      return this.redirectHome();
    }
  };
}

const mapStateToProps = state => ({
  userIsAuthenticated: userIsAuthenticated(state),
  openTenderRef: get(state, 'openTender.ref'),
  recentOrder: get(state, 'openTender.data.customerOrders.recentSubmission'),
  currentCustomer: get(state, 'openTender.user')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchAllCustomerOrders
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummaryContainer);
