import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE, PENDING, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';
import withBrand from 'lib/withBrand';
import BrandStyle from 'lib/BrandStyle';

import Routes from 'Routes';
import get from 'utils/get';
import { Loader, Nav, Image } from 'components';

class App extends Component {
  constructor(props) {
    super(...arguments);
    const openTenderConfig = get(props, 'openTenderConfig', {});
    const OpenTender = new OpenTenderRef(openTenderConfig);

    const { applicationStatus, actions } = props;

    if (applicationStatus === IDLE) actions.initializeApplication(OpenTender);
  }

  render() {
    const { applicationStatus, brand } = this.props;

    if (applicationStatus !== FULFILLED) return null;

    return (
      <div className="App">
        <BrandStyle brand={brand} />
        <Suspense fallback={<Loader />}>
          <Image
            className="App__background-image bg-cover absolute t0 l0 r0 b0"
            isBg={true}
            src={get(brand, 'backgroundImage')}
          />
          <Nav brand={brand} />
          <Routes />
        </Suspense>
      </div>
    );
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
  withBrand(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
