import { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import { ESCAPE_KEYS } from 'constants/Accessibility';

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

  constructor() {
    super(...arguments);

    this.dropdownRef = createRef();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (!ESCAPE_KEYS.includes(e.keyCode)) return null;

    return this.props.onClose();
  };

  handleClick = e => {
    if (!this.dropdownRef || !this.dropdownRef.current) return null;
    if (!this.dropdownRef.current.contains(e.target)) {
      return this.props.onClose();
    }
  };

  render() {
    const { dropdownIsActive, onClose, children } = this.props;

    return RegistryLoader(
      { dropdownIsActive, onClose, children, dropdownRef: this.dropdownRef },
      'components.Dropdown',
      () => import('./presentation.js')
    );
  }
}

export default Dropdown;
