import { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { currentItem } from 'state/selectors';
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

const mapStateToProps = state => ({
  item: currentItem(state)
});

export default connect(mapStateToProps)(
  withRouter(withLineItemActions(LineItemEditor))
);
