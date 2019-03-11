import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class MenuCategoryHeader extends PureComponent {
  static propTypes = {
    menuCategory: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    })
  };

  static defaultProps = {
    menuCategory: {
      name: '',
      description: ''
    }
  };

  render() {
    const { menuCategory } = this.props;

    return RegistryLoader(
      { menuCategory },
      'components.MenuCategoryHeader',
      () => import('./presentation.js')
    );
  }
}

export default MenuCategoryHeader;
