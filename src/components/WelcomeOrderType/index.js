import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withComponents from 'lib/withComponents';
import withLocales from 'lib/withLocales';

import { Constants } from 'brandibble-redux';
import get from 'utils/get';

class WelcomeOrderType extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

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

export default withComponents(withLocales(WelcomeOrderType));
