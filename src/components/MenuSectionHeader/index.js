import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionHeader extends PureComponent {
  render() {
    const { menuSection } = this.props;

    return RegistryLoader({ menuSection }, 'components.MenuSectionHeader', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionHeader;
