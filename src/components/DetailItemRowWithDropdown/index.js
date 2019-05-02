import React, { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';
import Breakpoints from 'constants/Breakpoints';
import get from 'utils/get';

class DetailItemRowWithDropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onClick: PropTypes.func
  };

  static defaultProps = {
    label: null,
    icon: null,
    value: null,
    children: null,
    onClick: f => f
  };

  state = {
    dropdownIsActive: false,
    isMobile: false
  };

  componentWillMount() {
    this.checkDeviceWidth();
    window.addEventListener('resize', this.checkDeviceWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkDeviceWidth);
  }

  checkDeviceWidth = () => {
    const wasMobile = this.state.isMobile;
    const isMobile = window.innerWidth < Breakpoints.md;

    if (isMobile !== wasMobile) return this.setState({ isMobile });
  };

  openDropdown = () => this.setState({ dropdownIsActive: true });
  closeDropdown = () => this.setState({ dropdownIsActive: false });

  render() {
    const { label, icon, value, children } = this.props;
    const { isMobile, dropdownIsActive } = this.state;

    let onClick;

    if (isMobile && get(this, 'props.onClick')) {
      onClick = this.props.onClick;
    } else {
      onClick = dropdownIsActive ? this.closeDropdown : this.openDropdown;
    }

    const wrappedChildren = children
      ? React.cloneElement(children, { onClose: this.closeDropdown })
      : null;

    return RegistryLoader(
      {
        label,
        icon,
        value,
        onClick,
        dropdownIsActive: this.state.dropdownIsActive,
        closeDropdown: this.closeDropdown,
        children: wrappedChildren
      },
      'components.DetailItemRowWithDropdown',
      () => import('./presentation.js')
    );
  }
}

export default DetailItemRowWithDropdown;
