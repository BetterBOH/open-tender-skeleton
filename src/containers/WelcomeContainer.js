import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setServiceType } from 'brandibble-redux';

import {
  fetchAllLocations,
  setLocationType
} from 'state/actions/locationsActions';
import get from 'utils/get';

class WelcomeContainer extends ContainerBase {
  view = import('views/WelcomeView');
}

const mapStateToProps = state => ({
  brand: get(state, 'openTender.data.brands.brand'),
  order: get(state, 'order'),
  openTenderRef: get(state, 'openTender.ref'),
  orderRef: get(state, 'openTender.session.order.ref')
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchAllLocations,
        setServiceType,
        setLocationType
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
