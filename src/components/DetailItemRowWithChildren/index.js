import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailItemRowWithChildren extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    shouldClose: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    label: null,
    icon: null,
    value: '',
    hasError: false,
    shouldClose: false,
    children: null
  };

  state = {
    isOpen: false
  };

  componentDidUpdate(prevProps) {
    if (this.state.isOpen && !prevProps.shouldClose && this.props.shouldClose) {
      this.collapse();
    }
  }

  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });

  render() {
    const { label, icon, value, hasError, children } = this.props;

    return RegistryLoader(
      {
        label,
        icon,
        value,
        hasError,
        isOpen: this.state.isOpen,
        open: this.open,
        close: this.close,
        children
      },
      'components.DetailItemRowWithChildren',
      () => import('./presentation.js')
    );
  }
}

export default DetailItemRowWithChildren;
