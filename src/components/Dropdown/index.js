import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';

class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onClose: PropTypes.func,
    dropdownIsActive: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    onClose: f => f,
    dropdownIsActive: false
  };

  render() {
    const { dropdownIsActive, onClose, children } = this.props;

    return RegistryLoader(
      { dropdownIsActive, onClose, children },
      'components.Dropdown',
      () => import('./presentation.js')
    );
  }
}

export default Dropdown;
