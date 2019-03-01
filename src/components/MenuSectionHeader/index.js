import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionHeader extends PureComponent {
  static propTypes = {
    menuSection: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    })
  };

  static defaultProps = {
    menuSection: {
      name: '',
      description: ''
    }
  };

  render() {
    const { menuSection } = this.props;

    return RegistryLoader({ menuSection }, 'components.MenuSectionHeader', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionHeader;
