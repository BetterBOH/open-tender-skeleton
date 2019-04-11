import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailItemRowWithChildren extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    label: null,
    icon: null,
    value: null,
    children: null
  };

  state = {
    isExpanded: false
  };

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
