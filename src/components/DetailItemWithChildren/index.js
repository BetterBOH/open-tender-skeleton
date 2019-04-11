import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailItemRowWithChildren extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    shouldCollapse: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    label: null,
    icon: null,
    value: null,
    shouldCollapse: false,
    children: null
  };

  state = {
    isExpanded: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isExpanded &&
      !prevProps.shouldCollapse &&
      this.props.shouldCollapse
    ) {
      this.collapse();
    }
  }

  expand = () => this.setState({ isExpanded: true });
  collapse = () => this.setState({ isExpanded: false });

  render() {
    const { label, icon, value, children } = this.props;
    return RegistryLoader(
      {
        label,
        icon,
        value,
        isExpanded: this.state.isExpanded,
        expand: this.expand,
        collapse: this.collapse,
        children
      },
      'components.DetailItemRowWithChildren',
      () => import('./presentation.js')
    );
  }
}

export default DetailItemRowWithChildren;
