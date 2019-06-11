import React, { Suspense, Component } from 'react';
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
  Loader,
  Footer,
  Modal,
  Drawer,
  SystemNotifications,
  SideCurtain,
  CartButton
} from 'components';

import SideCurtainVariants from 'constants/SideCurtainVariants';
const { MINI_CART } = SideCurtainVariants;

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
        <Suspense
          fallback={
            <Suspense fallback={null}>
              <Loader />
            </Suspense>
          }
        >
          <BrandStyle />
          <Nav brand={brand} customer={customer} />
          <SystemNotifications />
          <div className="container">
            <AppBackground />
            <Routes />
          </div>
          <div className="CartButton__container fixed b0 r0 mr1 md:mr3 mb1 md:col-6 lg:col-5 z1">
            <CartButton
              className="right"
              onClick={() => get(actions, 'setSideCurtain', f => f)(MINI_CART)}
              currentLineItems={lineItems}
            />
          </div>
          <Modal />
          <Drawer />
          <SideCurtain />
          <Footer brand={brand} />
        </Suspense>
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
