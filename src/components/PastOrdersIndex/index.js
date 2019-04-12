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

  handleShowMoreOrders = (amountToIncrement = 2) =>
    this.setState({
      pastOrdersToShow: this.state.pastOrdersToShow + amountToIncrement
    });

  render() {
    const { orders } = this.props;
    const { pastOrdersToShow } = this.state;

    console.log(orders.length);

    return RegistryLoader(
      { orders, pastOrdersToShow, handleShowMoreOrders: this.showMoreOrders },
      'components.PastOrdersIndex',
      () => import('./presentation.js')
    );
  }
}

export default PastOrdersIndex;
