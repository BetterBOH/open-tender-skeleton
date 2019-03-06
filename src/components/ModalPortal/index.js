import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class ModalPortal extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  };

  static defaultProps = {
    children: null
  };

  render() {
    const { children } = this.props;
    return RegistryLoader({ children }, 'components.ModalPortal', () =>
      import('./presentation.js')
    );
  }
}

export default ModalPortal;
