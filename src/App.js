import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';

import get from 'utils/get';

import Routes from 'Routes';

class App extends Component {
  componentWillMount() {
    const openTenderConfig = get(this.props, 'openTender', {});
    const OpenTender = new OpenTenderRef(openTenderConfig);

    const { applicationStatus, actions } = this.props;

    if (applicationStatus === IDLE) actions.initializeApplication(OpenTender);
  }

  render() {
    return <Routes />;
  }
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.initializeApplication')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      initializeApplication
    },
    dispatch
  )
});

export default withConfig(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
