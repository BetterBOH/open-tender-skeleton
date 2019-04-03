import { Component } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import OptionGroupMappingModel from 'constants/Models/OptionGroupMappingModel';
import LineItemModel from 'constants/Models/LineItemModel';

class OptionGroup extends Component {
  static propTypes = {
    optionGroup: OptionGroupMappingModel.propTypes,
    lineItem: LineItemModel.propTypes
  };

  static defaultProps = {
    optionGroup: null,
    lineItem: null
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
