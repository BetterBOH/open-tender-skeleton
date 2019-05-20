import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class AppBackground extends PureComponent {
  static propTypes = {
    onLoad: PropTypes.func
  };

  static defaultProps = {
    onLoad: f => f
  };

  render() {
    const { location, onLoad } = this.props;

    return RegistryLoader(
      { location, onLoad },
      'components.AppBackground',
      () => import('./presentation.js')
    );
  }
}

export default withRouter(AppBackground);
