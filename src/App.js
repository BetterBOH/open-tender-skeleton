import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router-dom';

import { IDLE, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import { setSideCurtain } from 'state/actions/ui/sideCurtainActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';
import withBrand from 'lib/withBrand';
import BrandStyle from 'lib/BrandStyle';

import Routes from 'Routes';
import get from 'utils/get';
import {
  Nav,
  Image,
  Footer,
  Modal,
  Drawer,
  SystemNotifications,
  SideCurtain,
  CurrentOrderSummary
} from 'components';

import 'what-input';

class App extends Component {
  constructor(props) {
    super(...arguments);
    const openTenderConfig = get(props, 'openTenderConfig', {});
    const OpenTender = new OpenTenderRef(openTenderConfig);

    const { applicationStatus, actions } = props;

    if (applicationStatus === IDLE) actions.initializeApplication(OpenTender);
  }

  render() {
    const {
      actions,
      applicationStatus,
      customer,
      lineItems,
      brandContext
    } = this.props;
    if (applicationStatus !== FULFILLED) return null;

    return (
      <div className="App">
        <BrandStyle />
        <Nav customer={customer} />
        <SystemNotifications />
        <main className="container relative">
          <Image
            className="bg-cover absolute t0 l0 r0 b0 z-1"
            isBg={true}
            src={get(brandContext, 'backgroundImage')}
          />
          <Routes />
        </main>
        <CurrentOrderSummary
          setSideCurtain={get(actions, 'setSideCurtain', f => f)}
          lineItems={lineItems}
        />
        <Modal />
        <Drawer />
        <SideCurtain />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.initializeApplication'),
  customer: get(state, 'openTender.user.attributes'),
  lineItems: get(state, 'openTender.session.order.lineItemsData')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      initializeApplication,
      setSideCurtain
    },
    dispatch
  )
});

export default withRouter(
  withConfig(
    withBrand(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(App)
    )
  )
);
