import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeLineItem } from 'brandibble-redux';

import { removeInvalidLineItems } from 'state/actions/orderActions';
import { currentLineItem } from 'state/selectors';
import RegistryLoader from 'lib/RegistryLoader';
import LineItemModel from 'constants/Models/LineItemModel';
import withLineItemActions from 'lib/withLineItemActions';
import { resetModal } from 'state/actions/ui/modalActions';

import get from 'utils/get';
import { getConfig } from 'lib/MutableConfig';
import ConfigKeys from 'constants/ConfigKeys';

class LineItemEditor extends Component {
  static propTypes = {
    lineItem: LineItemModel.propTypes
  };

  static defaultProps = {
    lineItem: null
  };

  componentWillUnmount() {
    const { actions } = this.props;

    return actions.removeInvalidLineItems();
  }

  onClose = () => {
    const { actions, orderRef, lineItem } = this.props;

    actions.resetModal();
    actions.removeLineItem(orderRef, lineItem);
    get(getConfig(ConfigKeys.STATE), 'history').goBack();
  };

  onConfirm = () => {
    const { actions } = this.props;

    actions.resetModal();
    get(getConfig(ConfigKeys.STATE), 'history').goBack();
  };

  render() {
    const { lineItem } = this.props;

    return RegistryLoader(
      { lineItem, onClose: this.onClose, onConfirm: this.onConfirm },
      'components.LineItemEditor',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  lineItem: currentLineItem(state),
  orderRef: get(state, 'openTender.session.order.ref')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { removeInvalidLineItems, removeLineItem, resetModal },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLineItemActions(LineItemEditor));
