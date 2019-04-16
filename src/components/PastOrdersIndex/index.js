import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

import OrderModel from 'constants/Models/OrderModel';

class PastOrdersIndex extends PureComponent {
  static propTypes = {
    orders: PropTypes.arrayOf(OrderModel.propTypes)
  };

  static defaultProps = {
    orders: []
  };

  state = {
    pastOrdersToShow: 2
  };

  handleShowMoreOrders = (amountToIncrement = 2) => {
    return this.setState(prevState => ({
      pastOrdersToShow: prevState.pastOrdersToShow + amountToIncrement
    }));
  };

  render() {
    const { orders, attemptReorder, createSystemNotification } = this.props;
    const { pastOrdersToShow } = this.state;

    return RegistryLoader(
      {
        orders,
        pastOrdersToShow,
        handleShowMoreOrders: this.handleShowMoreOrders,
        attemptReorder,
        createSystemNotification
      },
      'components.PastOrdersIndex',
      () => import('./presentation.js')
    );
  }
}

export default PastOrdersIndex;
