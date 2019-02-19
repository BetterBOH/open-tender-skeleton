import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FULFILLED, PENDING } from 'constants/Status';
import { setOrderAndServiceType } from 'state/actions/locationsActions';

import get from 'utils/get';

class WelcomeContainer extends ContainerBase {
  view = import('views/WelcomeView');

  componentDidUpdate(prevProps) {
    if (
      prevProps.setOrderAndServiceType === PENDING &&
      this.props.setOrderAndServiceType === FULFILLED
    ) {
      this.props.history.push('/location');
    }
  }
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref'),
  setOrderAndServiceType: get(state, 'status.setOrderAndServiceType')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setOrderAndServiceType }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
