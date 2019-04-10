import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailItemRowWithDropdown extends PureComponent {
  state = {
    dropdownIsActive: false
  };

  openDropdown = () => this.setState({ dropdownIsActive: true });
  closeDropdown = () => this.setState({ dropdownIsActive: false });

  render() {
    const { label, icon, value, children } = this.props;
    return RegistryLoader(
      {
        label,
        icon,
        value,
        dropdownIsActive: this.state.dropdownIsActive,
        openDropdown: this.openDropdown,
        closeDropdown: this.closeDropdown,
        children
      },
      'components.DetailItemRowWithDropdown',
      () => import('./presentation.js')
    );
  }
}

DetailItemRowWithDropdown.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string
};

DetailItemRowWithDropdown.defaultProps = {
  label: '',
  icon: '',
  value: ''
};

export default DetailItemRowWithDropdown;
