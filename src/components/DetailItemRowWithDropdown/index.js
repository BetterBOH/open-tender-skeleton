import React, { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailItemRowWithDropdown extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onClickValueNode: PropTypes.func
  };

  static defaultProps = {
    label: null,
    icon: null,
    value: null,
    children: null,
    onClickValueNode: f => f
  };

  state = {
    dropdownIsActive: false
  };

  openDropdown = () => this.setState({ dropdownIsActive: true });
  closeDropdown = () => this.setState({ dropdownIsActive: false });

  render() {
    const { label, icon, value, children, onClickValueNode } = this.props;

    let onClick;

    if (!!onClickValueNode) {
      onClick = onClickValueNode;
    } else {
      onClick = this.state.dropdownIsActive
        ? this.closeDropdown
        : this.openDropdown;
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
