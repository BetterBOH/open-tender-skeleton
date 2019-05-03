import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class EditUserAttributeRedirect extends PureComponent {
  static propTypes = {
    editAttributePath: PropTypes.string,
    handleClickCheckoutAsGuest: PropTypes.func,
    onClose: PropTypes.func
  };

  static defaultProps = {
    editAttributePath: '',
    handleClickCheckoutAsGuest: f => f,
    onClose: f => f
  };

  handleClickCheckoutAsGuest = () => {
    this.props.handleClickCheckoutAsGuest();

    return this.props.onClose();
  };

  render() {
    const { editAttributePath, onClose } = this.props;

    return RegistryLoader(
      {
        editAttributePath,
        handleClickCheckoutAsGuest: this.handleClickCheckoutAsGuest,
        onClose
      },
      'components.EditUserAttributeRedirect',
      () => import('./presentation.js')
    );
  }
}

export default EditUserAttributeRedirect;
