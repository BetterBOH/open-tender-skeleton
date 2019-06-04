import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';

class LocationIsClosed extends Component {
  static propTypes = {
    handleAcceptClick: PropTypes.func,
    actions: PropTypes.shape({
      resetModal: PropTypes.func,
      resetApplication: PropTypes.func
    }),
    history: PropTypes.shape({
      push: PropTypes.func
    })
  };

  static defaultProps = {
    handleAcceptClick: f => f,
    actions: {
      resetModal: f => f,
      resetApplication: f => f
    },
    history: {
      push: f => f
    }
  };

  handleAccept = () => {
    const { handleAcceptClick, actions, history } = this.props;
    actions.resetModal();

    return handleAcceptClick(() => history.push('/'));
  };

  render() {
    return RegistryLoader(
      {
        handleAccept: this.handleAccept
      },
      'components.LocationIsClosed',
      () => import('./presentation.js')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetModal
    },
    dispatch
  )
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(LocationIsClosed));
