import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import OrderModel from 'constants/Models/OrderModel';

class PastOrderDetails extends PureComponent {
  static propTypes = {
    order: OrderModel.propTypes
  };

  static defaultProps = {
    order: OrderModel.defaultProps
  };

  render() {
    const { order } = this.props;

    return RegistryLoader({ order }, 'components.PastOrderDetails', () =>
      import('./presentation.js')
    );
  }
}

export default PastOrderDetails;
