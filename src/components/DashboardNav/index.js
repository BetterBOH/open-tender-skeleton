import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class DashboardNav extends PureComponent {
  static propTypes = {
    updateActiveSection: PropTypes.func,
    activeSection: PropTypes.string
  };

  static defaultProps = {
    updateActiveSection: f => f,
    activeSection: null
  };

  render() {
    const { updateActiveSection, activeSection } = this.props;

    return RegistryLoader(
      { updateActiveSection, activeSection },
      'components.DashboardNav',
      () => import('./presentation.js')
    );
  }
}

export default DashboardNav;
