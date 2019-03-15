import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import LocationModel from 'constants/Models/LocationModel';

class MenuHero extends PureComponent {
  static propTypes = {
    location: LocationModel.propTypes,
    menuType: PropTypes.string,
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    location: null,
    menuType: '',
    menuCategories: []
  };

  render() {
    const { location, menuType, menuCategories } = this.props;

    return RegistryLoader(
      { location, menuType, menuCategories },
      'components.MenuHero',
      () => import('./presentation.js')
    );
  }
}

export default MenuHero;
