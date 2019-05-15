import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class DashboardNav extends PureComponent {
  static propTypes = {
    activeSection: PropTypes.string
  };

  static defaultProps = {
    activeSection: null
  };

  render() {
    const { activeSection } = this.props;

    return RegistryLoader({ activeSection }, 'components.DashboardNav', () =>
      import('./presentation.js')
    );
  }
}

export default DashboardNav;
