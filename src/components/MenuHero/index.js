import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import LocationModel from 'constants/Models/LocationModel';

class MenuHero extends PureComponent {
  static propTypes = {
    location: LocationModel.propTypes,
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    )
  };

  static defaultProps = {
    location: null,
    menuCategories: []
  };

  render() {
    const { location, menuCategories } = this.props;

    return RegistryLoader(
      { location, menuCategories },
      'components.MenuHero',
      () => import('./presentation.js')
    );
  }
}

export default MenuHero;
