import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class MenuSectionItemsMedium extends PureComponent {
  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  render() {
    const { items } = this.props;

    return RegistryLoader({ items }, 'components.MenuSectionItemsMedium', () =>
      import('./presentation.js')
    );
  }
}

export default MenuSectionItemsMedium;
