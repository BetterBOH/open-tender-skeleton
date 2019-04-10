import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FlashVariants from 'constants/FlashVariants';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';

const { WARNING, ERROR, MESSAGE } = FlashVariants;

class Flash extends PureComponent {
  static variants = {
    WARNING,
    ERROR,
    MESSAGE
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

export default withLocales(Flash);
