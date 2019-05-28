import { PureComponent } from 'react';
import RegistryLoader from 'lib/RegistryLoader';
import OptionGroupMappingModel from 'constants/Models/OptionGroupMappingModel';

class OptionGroupStatus extends PureComponent {
  static propTypes = {
    optionGroup: OptionGroupMappingModel.propTypes
  };

  static defaultProps = {
    optionGroup: OptionGroupMappingModel.defaultProps
  };

  render() {
    const { optionGroup } = this.props;

    return RegistryLoader({ optionGroup }, 'components.OptionGroupStatus', () =>
      import('./presentation.js')
    );
  }
}

export default OptionGroupStatus;
