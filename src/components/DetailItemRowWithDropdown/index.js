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
    ])
  };

  static defaultProps = {
    label: null,
    icon: null,
    value: null,
    children: null
  };

  state = {
    dropdownIsActive: false
  };

  openDropdown = () => this.setState({ dropdownIsActive: true });
  closeDropdown = () => this.setState({ dropdownIsActive: false });

  render() {
    const { label, icon, value, children } = this.props;
    const wrappedChildren = children
      ? React.cloneElement(children, { onClose: this.closeDropdown })
      : null;

    console.log(wrappedChildren);

    return RegistryLoader(
      {
        label,
        icon,
        value,
        dropdownIsActive: this.state.dropdownIsActive,
        openDropdown: this.openDropdown,
        closeDropdown: this.closeDropdown,
        children: wrappedChildren
      },
      'components.DetailItemRowWithDropdown',
      () => import('./presentation.js')
    );
  }
}

export default DetailItemRowWithDropdown;
