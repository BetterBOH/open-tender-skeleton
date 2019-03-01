import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import withComponents from 'lib/withComponents';
import LocationModel from 'constants/Models/LocationModel';

class MenuHero extends PureComponent {
  static propTypes = {
    location: LocationModel.propTypes
  };

  static defaultProps = {
    location: null
  };

  render() {
    const { location } = this.props;

    return RegistryLoader({ location }, 'components.MenuHero', () =>
      import('./presentation.js')
    );
  }
}

export default withComponents(MenuHero);
