import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';

class Flash extends PureComponent {
  static variants = {
    WARNING: 'warning',
    ERROR: 'error',
    MESSAGE: 'message'
  };

  static propTypes = {
    variant: PropTypes.string,
    message: PropTypes.string,
    description: PropTypes.string,
    onClose: PropTypes.func
  };

  static defaultProps = {
    variant: Flash.variants.WARNING,
    message: '',
    description: '',
    onClose: null
  };

  render() {
    const { variant, message, description, onClose } = this.props;
    return RegistryLoader(
      { variant, message, description, onClose },
      'components.Flash',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(withLocales(Flash));
