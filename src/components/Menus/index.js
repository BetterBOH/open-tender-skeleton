import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class Menus extends PureComponent {
  static propTypes = {
    menu: PropTypes.object
  };

  static defaultProps = {
    menu: null
  };

  render() {
    const { menu } = this.props;

    return RegistryLoader({ menu }, 'components.Menus', () =>
      import('./presentation.js')
    );
  }
}

export default Menus;
