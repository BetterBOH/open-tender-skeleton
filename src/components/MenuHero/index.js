import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import LocationModel from 'constants/Models/LocationModel';
import MenuModel from 'constants/Models/MenuModel';

class MenuHero extends PureComponent {
  static propTypes = {
    location: LocationModel.propTypes,
    menu: MenuModel.propTypes
  };

  static defaultProps = {
    location: null,
    menu: MenuModel.defaultProps
  };

  render() {
    const { location, menu, orderData } = this.props;

    return RegistryLoader(
      { location, menu, orderData },
      'components.MenuHero',
      () => import('./presentation.js')
    );
  }
}

export default MenuHero;
