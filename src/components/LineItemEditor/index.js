import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';

class LineItemEditor extends Component {
  static propTypes = {
    item: PropTypes.shape({
      lineItem: LineItemModel.propTypes
    }),
    onClose: PropTypes.func
  };

  static defaultProps = {
    item: null,
    onClose: f => f
  };

  render() {
    const { item, onClose } = this.props;

    return RegistryLoader({ item, onClose }, 'components.LineItemEditor', () =>
      import('./presentation.js')
    );
  }
}

export default withRouter(withLineItemActions(LineItemEditor));
