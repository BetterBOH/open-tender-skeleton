import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import { DashboardSections } from 'constants/Dashboard';

class DashboardNav extends PureComponent {
  static propTypes = {
    activeSection: PropTypes.string
  };

  static defaultProps = {
    activeSection: DashboardSections.REORDER
  };

  render() {
    const { activeSection } = this.props;

    return RegistryLoader({ activeSection }, 'components.DashboardNav', () =>
      import('./presentation.js')
    );
  }
}

export default DashboardNav;
