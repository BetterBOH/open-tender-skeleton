import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import PropTypes from 'prop-types';

class DetailsCard extends PureComponent {
  static propTypes = {
    details: PropTypes.arrayOf(PropTypes.object)
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
