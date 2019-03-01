import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionItemsLarge extends PureComponent {
  render() {
    const { items } = this.props;
    return RegistryLoader({ items }, 'components.MenuSectionItemsLarge', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionItemsLarge;
