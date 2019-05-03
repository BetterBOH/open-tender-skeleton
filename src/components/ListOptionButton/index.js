import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class ListOptionButton extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.string,
    ariaLabel: PropTypes.string
  };

  static defaultProps = {
    icon: '',
    text: '',
    label: '',
    onClick: f => f,
    to: null,
    ariaLabel: ''
  };

  render() {
    const { icon, text, label, onClick, to, ariaLabel } = this.props;

    return RegistryLoader(
      { icon, text, label, onClick, to, ariaLabel },
      'components.ListOptionButton',
      () => import('./presentation.js')
    );
  }
}

export default ListOptionButton;
