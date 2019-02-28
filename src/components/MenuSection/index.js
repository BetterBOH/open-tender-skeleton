import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSection extends PureComponent {
  render() {
    const { menuSection } = this.props;

    return RegistryLoader({ menuSection }, 'components.MenuSection', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSection;
