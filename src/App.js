import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router-dom';
import { Status } from 'brandibble-redux';

import { initializeApplication } from 'state/actions/applicationActions';
import { setSideCurtain } from 'state/actions/ui/sideCurtainActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';
import BrandStyle from 'lib/BrandStyle';

import Routes from 'Routes';
import get from 'utils/get';
import {
  Nav,
  AppBackground,
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

    if (applicationStatus === Status.IDLE)
      actions.initializeApplication(OpenTender);
  }

  render() {
    const {
      actions,
      applicationStatus,
      customer,
      brand,
      lineItems
    } = this.props;
    if (applicationStatus !== Status.FULFILLED) return null;

    return (
      <div className="App">
        <BrandStyle />
        <Nav brand={brand} customer={customer} />
        <SystemNotifications />
        <main className="container relative">
          <AppBackground />
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
  brand: get(state, 'openTender.data.brands.brand'),
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
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
