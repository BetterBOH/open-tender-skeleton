import { Component } from 'react';
import PropTypes from 'prop-types';
import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';
import withModalActions from 'lib/withModalActions';

class LineItemEditor extends Component {
  static propTypes = {
    item: PropTypes.shape({
      lineItem: LineItemModel.propTypes
    })
  };

  static defaultProps = {
    item: null
  };

  render() {
    const { item, actions } = this.props;

    return RegistryLoader({ item, actions }, 'components.LineItemEditor', () =>
      import('./presentation.js')
    );
  }
}

export default withModalActions(withLineItemActions(LineItemEditor));
