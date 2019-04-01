import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';
import withBrand from 'lib/withBrand';
import BrandStyle from 'lib/BrandStyle';

import { createSystemNotification } from 'state/actions/ui/systemNotificationsActions';

import Routes from 'Routes';
import get from 'utils/get';
import {
  Loader,
  Nav,
  Image,
  Footer,
  Modal,
  Drawer,
  SystemNotifications,
  SideCurtain
} from 'components';
import { logoWhite, logoBlack } from 'assets';

class App extends Component {
  constructor(props) {
    super(...arguments);
    const openTenderConfig = get(props, 'openTenderConfig', {});
    const OpenTender = new OpenTenderRef(openTenderConfig);

    const { applicationStatus, actions } = props;

    setTimeout(
      () =>
        actions.createSystemNotification({
          message: 'There was an error processing your card.',
          description:
            'Please enter a new set of credit card credentials or try entering in your information again.',
          variant: 'error'
        }),
      1000
    );

    setTimeout(
      () =>
        actions.createSystemNotification({
          message: 'You have new messages from your favorite taco spot.',
          variant: 'message'
        }),
      3000
    );

    setTimeout(
      () =>
        actions.createSystemNotification({
          message: 'Your order is on the way!',
          description:
            'Your delivery person, Tamara, will arrive at your door in less than 30 minutes. Enjoy :)',
          variant: 'warning'
        }),
      6000
    );

    if (applicationStatus === IDLE) actions.initializeApplication(OpenTender);
  }

  render() {
    const { applicationStatus, brandContext } = this.props;
    if (applicationStatus !== FULFILLED) return null;

    return (
      <div className="App">
        <BrandStyle />
        <Suspense fallback={<Loader />}>
          <Nav />
          <SystemNotifications />
          <main className="container relative">
            <Image
              className="bg-cover absolute t0 l0 r0 b0 z-1"
              isBg={true}
              src={get(brandContext, 'backgroundImage')}
            />
            <Routes />
          </main>
          <Footer
            backgroundColor={get(brandContext, 'brandColor')}
            logoImage={get(brandContext, 'logoImage')}
            textColor={get(brandContext, 'colors.white')}
            links={get(brandContext, 'links', [])}
            openTenderLogo={
              get(brandContext, 'theme', 'dark') === 'dark'
                ? logoWhite
                : logoBlack
            }
          />
          <Modal />
          <Drawer />
          <SideCurtain />
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
      initializeApplication,
      createSystemNotification
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
