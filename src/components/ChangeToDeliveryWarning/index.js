import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { setServiceType, removeLineItem, Constants } from 'brandibble-redux';
import RegistryLoader from 'lib/RegistryLoader';
import withRoutes from 'lib/withRoutes';
import ConfigKeys from 'constants/ConfigKeys';
import { getConfig } from 'lib/MutableConfig';
import get from 'utils/get';

class ChangeToDeliveryWarning extends PureComponent {
  handleConfirm = () => {
    const { actions, lineItems, orderRef, history, onClose } = this.props;
    const removeAllLineItems = lineItems.map(lineItem =>
      actions.removeLineItem(orderRef, lineItem)
    );

    return Promise.all([
      ...removeAllLineItems,
      actions.setServiceType(orderRef, Constants.ServiceTypes.DELIVERY)
    ]).then(() => {
      onClose();
      return history.push(get(getConfig(ConfigKeys.ROUTES), 'locations.path'));
    });
  };

  render() {
    const { onClose } = this.props;
    return RegistryLoader(
      {
        onClose,
        handleConfirm: this.handleConfirm
      },
      'components.ChangeToDeliveryWarning',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  orderRef: get(state, 'openTender.session.order.ref'),
  lineItems: get(state, 'openTender.session.order.lineItemsData')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      removeLineItem,
      setServiceType
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoutes(withRouter(ChangeToDeliveryWarning)));
