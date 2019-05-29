import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class Flash extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    description: PropTypes.string,
    onClose: PropTypes.func
  };

  static defaultProps = {
    message: '',
    description: '',
    onClose: null
  };

  render() {
    const { message, description, onClose } = this.props;
    return RegistryLoader(
      { message, description, onClose },
      'components.Flash',
      () => import('./presentation.js')
    );
  }
}

export default Flash;
