import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class ListOptionButton extends PureComponent {
  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    ariaLabel: PropTypes.string,
    anchorTitle: PropTypes.string
  };

  static defaultProps = {
    icon: '',
    text: '',
    label: '',
    onClick: f => f,
    ariaLabel: '',
    anchorTitle: ''
  };

  render() {
    const { icon, text, label, onClick, ariaLabel, anchorTitle } = this.props;

    return RegistryLoader(
      { icon, text, label, onClick, ariaLabel, anchorTitle },
      'components.ListOptionButton',
      () => import('./presentation.js')
    );
  }
}

export default ListOptionButton;
