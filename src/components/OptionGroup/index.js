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
    console.log('OPT GROUP', this.props);
    const { optionGroup, lineItem } = this.props;
    return RegistryLoader(
      { optionGroup, lineItem },
      'components.OptionGroup',
      () => import('./presentation.js')
    );
  }
}

export default OptionGroup;
