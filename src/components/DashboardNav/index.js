import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class DashboardNav extends PureComponent {
  // TO-DO: Create functional DashboardNav (#85)
  render() {
    return RegistryLoader(this.props, 'components.DashboardNav', () =>
      import('./presentation.js')
    );
  }
}

export default DashboardNav;
