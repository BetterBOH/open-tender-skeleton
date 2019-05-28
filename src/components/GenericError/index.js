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
    handleAcceptClick: PropTypes.func
  };

  static defaultProps = {
    handleAcceptClick: f => f
  };

  handleAccept = () => {
    const { handleAcceptClick, history, actions, openTender } = this.props;

    return handleAcceptClick(() => {
      actions.resetApplication(openTender);
      actions.resetModal();

      return history.push('/');
    });
  };

  render() {
    const { localesContext } = this.props;

    return RegistryLoader(
      {
        localesContext,
        handleAccept: this.handleAccept
      },
      'components.GenericError',
      () => import('./presentation.js')
    );
  }
}

const mapStateToProps = state => ({
  openTender: get(state, 'openTender.ref')
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
