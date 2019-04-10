import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

import { Constants } from 'brandibble-redux';
import get from 'utils/get';

class WelcomeOrderType extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      setOrderAndServiceType: PropTypes.func
    }),
    brand: PropTypes.shape({
      order_types: PropTypes.shape({
        [Constants.OrderTypes.CATERING]: PropTypes.arrayOf(PropTypes.string),
        [Constants.OrderTypes.ONLINE_ORDERING]: PropTypes.arrayOf(
          PropTypes.string
        )
      })
    }),
    orderRef: PropTypes.object
  };

  static defaultProps = {
    actions: {
      setOrderAndServiceType: f => f
    },
    brand: {
      order_types: {
        [Constants.OrderTypes.CATERING]: [],
        [Constants.OrderTypes.ONLINE_ORDERING]: []
      }
    },
    orderRef: {}
  };

  static orderTypesStub = {
    [Constants.OrderTypes.CATERING]: [],
    [Constants.OrderTypes.ONLINE_ORDERING]: []
  };

  render() {
    const orderTypes = get(
      this.props.brand,
      'order_types',
      WelcomeOrderType.orderTypesStub
    );

    return RegistryLoader(
      {
        ...this.props,
        orderTypes
      },
      'components.WelcomeOrderType',
      () => import('./presentation')
    );
  }
}

export default WelcomeOrderType;
