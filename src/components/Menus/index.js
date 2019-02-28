import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';

class Menus extends PureComponent {
  render() {
    const { menu } = this.props;

    return RegistryLoader({ menu }, 'components.Menus', () =>
      import('./presentation.js')
    );
  }
}

export default Menus;
