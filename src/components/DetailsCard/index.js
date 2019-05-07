import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailsCard extends PureComponent {
  static propTypes = {
    details: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        hasError: PropTypes.bool,
        icon: PropTypes.string,
        value: PropTypes.string,
        children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node
        ]),
        renderChildrenInDropdown: PropTypes.bool,
        onClickValueNode: PropTypes.func
      })
    )
  };

  static defaultProps = {
    details: []
  };

  render() {
    const { details } = this.props;

    return RegistryLoader({ details }, 'components.DetailsCard', () =>
      import('./presentation')
    );
  }
}

export default DetailsCard;
