import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import getRoutes from 'utils/getRoutes';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

class ChangeServiceType extends PureComponent {
  redirectToWelcome = () => {
    const history = get(getConfig(ConfigKeys.STATE), 'history');
    return history.push(getRoutes().WELCOME);
  };

  render() {
    return RegistryLoader(
      {
        onClick: this.redirectToWelcome
      },
      'components.ChangeServiceType',
      () => import('./presentation.js')
    );
  }
}

export default ChangeServiceType;
