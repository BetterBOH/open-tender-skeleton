import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class Menus extends PureComponent {
  static propTypes = {
    menu: PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          description: PropTypes.string,
          appearance: PropTypes.string
        })
      )
    }),
    currentMenuQuantities: PropTypes.objectOf(
      PropTypes.objectOf(PropTypes.number)
    ),
    currentMenuFavorites: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
    )
  };

  static defaultProps = {
    menu: null,
    currentMenuQuantities: null,
    currentMenuFavorites: null
  };

  render() {
    const { menu, currentMenuQuantities, currentMenuFavorites } = this.props;

    return RegistryLoader(
      { menu, currentMenuQuantities, currentMenuFavorites },
      'components.Menus',
      () => import('./presentation.js')
    );
  }
}

export default Menus;
