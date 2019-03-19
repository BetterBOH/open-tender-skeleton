import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import get from 'utils/get';

class CheckoutContainer extends ContainerBase {
  view = import('views/CheckoutView');
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref'),
  order: get(state, 'openTender.session.order.ref')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);