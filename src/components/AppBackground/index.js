import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import RegistryLoader from 'lib/RegistryLoader';

class AppBackground extends PureComponent {
  render() {
    const { location } = this.props;

    return RegistryLoader({ location }, 'components.AppBackground', () =>
      import('./presentation.js')
    );
  }
}

export default withRouter(AppBackground);
