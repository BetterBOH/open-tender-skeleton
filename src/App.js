import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE, PENDING, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import { setModal, resetModal } from 'state/actions/ui/modalActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';
import withBrand from 'lib/withBrand';
import BrandStyle from 'lib/BrandStyle';

import Routes from 'Routes';
import get from 'utils/get';
import { Loader, Nav, Image, Footer, ModalPortal, Modal } from 'components';
import { logoWhite, logoBlack } from 'assets';

class App extends Component {
  constructor(props) {
    super(...arguments);
    const openTenderConfig = get(props, 'openTenderConfig', {});
    const OpenTender = new OpenTenderRef(openTenderConfig);

    const { applicationStatus, actions } = props;

    if (applicationStatus === IDLE) actions.initializeApplication(OpenTender);
  }

  render() {
    const { applicationStatus, brandContext } = this.props;
    if (applicationStatus !== FULFILLED) return null;

    return (
      <div className="App">
        <BrandStyle brand={brandContext} />
        <Suspense fallback={<Loader />}>
          <Nav brandContext={brandContext} />
          <main className="container relative">
            <Image
              className="bg-cover absolute t0 l0 r0 b0"
              isBg={true}
              src={get(brandContext, 'backgroundImage')}
            />
            <Routes />
          </main>
          <ModalPortal>
            <Modal
              isVisible={get(this, 'props.modal.isVisible')}
              variant={get(this, 'props.modal.variant')}
              data={get(this, 'props.modal.data')}
              resetModal={get(this, 'props.actions.resetModal')}
            />
          </ModalPortal>
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
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.initializeApplication'),
  modal: get(state, 'modal')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      initializeApplication,
      setModal,
      resetModal
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
