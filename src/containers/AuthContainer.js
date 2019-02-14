import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validateUser } from 'brandibble-redux';

import get from 'utils/get';

class AuthContainer extends ContainerBase {
  view = import('views/AuthView');

  model = () => {};
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref')
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        validateUser
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
