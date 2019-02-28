import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withComponents from 'lib/withComponents';

class MenuHero extends PureComponent {
  render() {
    const { location } = this.props;

    return RegistryLoader({ location }, 'components.MenuHero', () =>
      import('./presentation.js')
    );
  }
}

export default withComponents(MenuHero);
