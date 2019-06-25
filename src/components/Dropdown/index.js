import { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import RegistryLoader from 'lib/RegistryLoader';
import { KeyNames } from 'constants/Accessibility';
import get from 'utils/get';

class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onClose: PropTypes.func,
    dropdownIsActive: PropTypes.bool,
    variant: PropTypes.string
  };

  static defaultProps = {
    children: null,
    onClose: f => f,
    dropdownIsActive: false,
    variant: null
  };

  constructor() {
    super(...arguments);

    this.dropdownRef = createRef();
  }

  componentDidMount() {
    const dropdownRef = get(this, 'dropdownRef.current');

    if (dropdownRef) return dropdownRef.focus();

    return null;
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
    if (e.key !== KeyNames.ESCAPE) return null;

    return this.props.onClose();
  };

  handleClick = e => {
    if (!this.dropdownRef || !this.dropdownRef.current) return null;
    if (!this.dropdownRef.current.contains(e.target)) {
      return this.props.onClose();
    }
  };

  render() {
    const { dropdownIsActive, onClose, children, variant } = this.props;

    return RegistryLoader(
      {
        dropdownIsActive,
        onClose,
        children,
        variant,
        dropdownRef: this.dropdownRef
      },
      'components.Dropdown',
      () => import('./presentation.js')
    );
  }
}

export default Dropdown;
