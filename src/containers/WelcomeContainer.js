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
    // const { actions, openTenderRef } = this.props;

    // console.log('PRAWPS', this.props)

    // debugger;
    // console.log(this.props.actions);
    console.log('RELOADED');
    return new Promise(resolve => setTimeout(resolve, 4000));
    // return actions.fetchLocation(openTenderRef, 538);
  };
}

const mapStateToProps = state => ({
  order: get(state, 'order', {}),
  openTenderRef: get(state, 'openTenderX.ref', {})
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchLocation
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeContainer);
