import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { removeInvalidLineItems } from 'state/actions/orderActions';
import { currentLineItem } from 'state/selectors';
import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';

class LineItemEditor extends Component {
  static propTypes = {
    lineItem: LineItemModel.propTypes,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func
  };

  static defaultProps = {
    lineItem: null,
    onClose: f => f,
    onConfirm: f => f
  };

  componentWillUnmount() {
    const { actions } = this.props;

    return actions.removeInvalidLineItems();
  }

  render() {
    const { lineItem, onClose, onConfirm } = this.props;

    return RegistryLoader(
      { lineItem, onClose, onConfirm },
      'components.LineItemEditor',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  lineItem: currentLineItem(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeInvalidLineItems }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLineItemActions(LineItemEditor));
