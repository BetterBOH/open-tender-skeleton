import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { resetApplication } from 'brandibble-redux';

import { resetModal } from 'state/actions/ui/modalActions';
import RegistryLoader from 'lib/RegistryLoader';
import get from 'utils/get';

class GenericError extends Component {
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
    const { handleAcceptClick, history, actions, openTenderRef } = this.props;

    return handleAcceptClick(() => {
      actions.resetApplication(openTenderRef);
      history.push('/');
      window.location.reload();
    });
  };

  render() {
    return RegistryLoader(
      {
        handleAccept: this.handleAccept
      },
      'components.GenericError',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTenderRef: get(state, 'openTender.ref')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      resetApplication,
      resetModal
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GenericError));
