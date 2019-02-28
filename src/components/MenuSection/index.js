import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';

class MenuSection extends PureComponent {
  static propTypes = {
    menuSection: PropTypes.object
  };

  static defaultProps = {
    menuSection: {
      items: []
    }
  };

  render() {
    const { menuSection, brandContext } = this.props;

    return RegistryLoader(
      { menuSection, brandContext },
      'components.MenuSection',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(MenuSection);
