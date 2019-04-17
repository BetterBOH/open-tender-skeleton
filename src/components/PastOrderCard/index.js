import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withLocales from 'lib/withLocales';
import RegistryLoader from 'lib/RegistryLoader';
import OrderModel from 'constants/Models/OrderModel';

class PastOrderCard extends PureComponent {
  static propTypes = {
    order: OrderModel.propTypes,
    onClick: PropTypes.func
  };

  static defaultProps = {
    order: OrderModel.defaultProps,
    onClick: f => f
  };

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
