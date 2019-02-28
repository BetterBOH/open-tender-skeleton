import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionItemsMedium extends PureComponent {
  render() {
    const { items } = this.props;

    return RegistryLoader({ items }, 'components.MenuSectionItemsMedium', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionItemsMedium;
