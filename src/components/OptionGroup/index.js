import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class OptionGroup extends Component {
  static propTypes = {
    optionGroup: PropTypes.object,
    lineItem: PropTypes.object
  };

  static defaultProps = {
    optionGroup: null,
    lineItem: PropTypes.object
  };

  render() {
    const { optionGroup, lineItem } = this.props;
    return RegistryLoader(
      { optionGroup, lineItem },
      'components.OptionGroup',
      () => import('./presentation.js')
    );
  }
}

export default OptionGroup;
