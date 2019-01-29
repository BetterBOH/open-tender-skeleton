import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAllLocations } from 'state/actions/locationsActions';

import get from 'utils/get';
import locationsByOrderType from '../state/selectors/locationsByOrderType';

class WelcomeContainer extends ContainerBase {
  view = import('views/WelcomeView');

  model = () => {
    const { actions, openTenderRef } = this.props;

    console.log('CONTAINER MODEL RUN', this.props);
    return actions.fetchAllLocations(openTenderRef);
  };
}

const mapStateToProps = state => ({
  order: get(state, 'order', {}),
  openTenderRef: get(state, 'openTender.ref', {}),
  locations: locationsByOrderType(state)
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchAllLocations
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
