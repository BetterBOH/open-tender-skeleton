import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLineItemActions from 'lib/withLineItemActions';

class OptionGroupItem extends PureComponent {
  static propTypes = {
    optionItem: PropTypes.object,
    optionGroup: PropTypes.object
  };

  static defaultProps = {
    optionItem: null,
    optionGroup: null
  };

  handleIncrement = () => {
    const { lineItem, optionGroup, addOptionToLineItem } = this.props;

    return addOptionToLineItem(lineItem, optionGroup);
  };

  handleDecrement = () => {
    const { lineItem, removeOptionFromLineItem } = this.props;

    return removeOptionFromLineItem(lineItem);
  };

  render() {
    const { optionItem, optionGroup, lineItem } = this.props;

    return RegistryLoader(
      {
        optionItem,
        optionGroup,
        lineItem,
        handleIncrement: this.handleIncrement,
        handleDecrement: this.handleDecrement
      },
      'components.OptionGroupItem',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(OptionGroupItem);
