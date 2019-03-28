import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import withLocales from 'lib/withLocales';
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
    console.log('zzz');
    const { lineItem, optionGroup, addOptionToLineItem } = this.props;

    return addOptionToLineItem(lineItem, optionGroup);
  };

  handleDecrement = () => {
    const { lineItem, removeOptionFromLineItem } = this.props;

    return removeOptionFromLineItem(lineItem);
  };

  render() {
    const { item, optionGroup, lineItem, localesContext } = this.props;
    console.log('OPT ITEM', item);

    return RegistryLoader(
      {
        item,
        optionGroup,
        lineItem,
        localesContext,
        handleIncrement: this.handleIncrement,
        handleDecrement: this.handleDecrement
      },
      'components.OptionGroupItem',
      () => import('./presentation.js')
    );
  }
}

export default withLineItemActions(withLocales(OptionGroupItem));