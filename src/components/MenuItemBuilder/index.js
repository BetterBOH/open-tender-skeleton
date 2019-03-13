import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class MenuItemBuilder extends Component {
  render() {
    return RegistryLoader({ ...props }, 'components.MenuItemBuilder', () =>
      import('./presentation.js')
    );
  }
}

export default MenuItemBuilder;
