import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class MenuNav extends PureComponent {
  static propTypes = {
    menuCategories: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
      })
    )
  };

  static defaultProps = {
    menuCategories: []
  };

  render() {
    const { menuCategories } = this.props;

    return RegistryLoader({ menuCategories }, 'components.MenuNav', () =>
      import('./presentation.js')
    );
  }
}

export default MenuNav;
