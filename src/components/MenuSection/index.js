import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';

class MenuSection extends PureComponent {
  render() {
    const { menuSection, brandContext } = this.props;

    return RegistryLoader(
      { menuSection, brandContext },
      'components.MenuSection',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(MenuSection);
