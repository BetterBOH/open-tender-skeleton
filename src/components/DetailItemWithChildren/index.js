import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailItemRowWithChildren extends PureComponent {
  static propTypes = {
    hasError: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    shouldClose: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    hasError: false,
    label: null,
    icon: null,
    value: null,
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
    const { hasError, label, icon, value, children } = this.props;

    return RegistryLoader(
      {
        hasError,
        label,
        icon,
        value,
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
