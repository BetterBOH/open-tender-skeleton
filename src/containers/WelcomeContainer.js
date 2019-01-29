import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAllLocations } from 'state/actions/locationsActions';

import { fetchLocation } from 'brandibble-redux';

import withConfig from 'lib/withConfig';
import get from 'utils/get';

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
  openTenderRef: get(state, 'openTender.ref', {})
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
