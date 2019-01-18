import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';

import Routes from 'Routes';
import get from 'utils/get';

class App extends Component {
  componentWillMount() {
    const openTenderConfig = get(this.props, 'openTender', {});
    const OpenTender = new OpenTenderRef(openTenderConfig);

    const { applicationStatus, actions } = this.props;

    if (applicationStatus === IDLE) actions.initializeApplication(OpenTender);
  }

  render() {
    const { applicationStatus } = this.props;
    if (applicationStatus !== FULFILLED) return null;

    return (
      <div className="App">
        <div
          className="App__background-image absolute t0 l0 r0 b0"
          style={{
            backgroundImage: `url(${get(this, 'props.brand.backgroundImage')})`
          }}
        />
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.initializeApplication'),
  brand: get(state, 'openTender.brand', {
    // placeholder image until we figure out brand content on Brandibble
    backgroundImage:
      'http://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1516102022/pyo0i3pijc4pjrq4far7.jpg'
  })
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
