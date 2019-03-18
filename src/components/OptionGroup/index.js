import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';

class OptionGroup extends Component {
  static propTypes = {
    optionGroup: PropTypes.object,
    handleDecrement: PropTypes.func,
    handleIncrement: PropTypes.func
  };

  static defaultProps = {
    optionGroup: null,
    handleDecrement: f => f,
    handleIncrement: f => f
  };

  render() {
    const { optionGroup, handleDecrement, handleIncrement } = this.props;
    return RegistryLoader(
      { optionGroup, handleDecrement, handleIncrement },
      'components.OptionGroup',
      () => import('./presentation.js')
    );
  }
}

export default OptionGroup;
