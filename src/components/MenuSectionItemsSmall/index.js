import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionItemsSmall extends PureComponent {
  render() {
    const { items } = this.props;
    return RegistryLoader({ items }, 'components.MenuSectionItemsSmall', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionItemsSmall;
