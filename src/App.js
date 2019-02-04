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
import { Loader, Nav, Image, Footer } from 'components';
import { logoWhite, logoBlack } from 'assets';

// placeholder image until we figure out brand content on Brandibble
const brand = {
  backgroundImage:
    'http://tacombi.com/system/uploads/gallery_image/image/40/gallery-events-tacombi-flatiron.jpg',
  logoImage:
    'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png',
  brandColor: '#68070A',
  textColor: 'white',
  footerLinks: [
    {
      name: 'Privacy Policy',
      url: '/privacy-policy'
    },
    {
      name: 'Terms of Use',
      url: '/terms'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    }
  ],
  theme: 'dark'
};

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
          <Nav brand={brand} />
          <main className="container relative">
            <Image
              className="bg-cover absolute t0 l0 r0 b0"
              isBg={true}
              src={get(brand, 'backgroundImage')}
            />
            <Routes />
          </main>
          <Footer
            backgroundColor={get(brand, 'brandColor')}
            logoImage={get(brand, 'logoImage')}
            textColor={get(brand, 'textColor')}
            links={get(brand, 'footerLinks', [])}
            openTenderLogo={
              get(brand, 'theme', 'dark') === 'dark' ? logoWhite : logoBlack
            }
          />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.initializeApplication'),
  brand: get(state, 'brand', brand)
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
