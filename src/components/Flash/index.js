import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withBrand from 'lib/withBrand';
import withLocales from 'lib/withLocales';
import FlashTypes from 'constants/FlashTypes';

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
    onClose: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    variant: Flash.variants.WARNING,
    message: '',
    description: '',
    onClose: null,
    className: ''
  };

  render() {
    const { variant, message, description, onClose, className } = this.props;
    return RegistryLoader(
      { variant, message, description, onClose, className },
      'components.Flash',
      () => import('./presentation.js')
    );
  }
}

export default withBrand(withLocales(Flash));
