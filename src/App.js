import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';

import Routes from 'Routes';
import get from 'utils/get';
import Loader from 'components/Loader';
import Nav from 'components/Nav';

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

    const brand = get(this, 'props.brand');

    return (
      <div className="App">
        <Suspense fallback={<Loader />}>
          <div
            className="App__background-image absolute t0 l0 r0 b0"
            style={{
              backgroundImage: `url(${get(brand, 'backgroundImage')})`
            }}
          />
          <Nav brand={brand} />
          <Routes />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.initializeApplication'),
  brand: get(state, 'openTender.brand', {
    // placeholder image until we figure out brand content on Brandibble
    backgroundImage:
      'http://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1516102022/pyo0i3pijc4pjrq4far7.jpg',
    logoImage:
      'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png'
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
