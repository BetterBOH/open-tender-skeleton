import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionHeader extends PureComponent {
  static propTypes = {
    menuSection: PropTypes.object
  };

  static defaultProps = {
    menuSection: null
  };

  render() {
    const { menuSection } = this.props;

    return RegistryLoader({ menuSection }, 'components.MenuSectionHeader', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionHeader;
