import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE, PENDING, FULFILLED } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import OpenTenderRef from 'lib/OpenTenderRef';
import withConfig from 'lib/withConfig';

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

  componentDidUpdate(prevProps) {
    console.log('APP DID UPDATE:', prevProps, this.props);
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.applicationStatus === PENDING &&
      nextProps.applicationStatus === PENDING
    ) {
      return false;
    } else return true;
  }

  render() {
    const { applicationStatus, location } = this.props;

    if (applicationStatus !== FULFILLED) return null;
    const brand = {
      // placeholder image until we figure out brand content on Brandibble
      backgroundImage:
        'http://tacombi.com/system/uploads/gallery_image/image/40/gallery-events-tacombi-flatiron.jpg',
      logoImage:
        'https://s3.amazonaws.com/betterboh/u/img/prod/51/1509669369_tacombi-logo_500x129.png'
    };

    console.log('APP RENDER');

    return (
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Image
            className="App__background-image bg-cover absolute t0 l0 r0 b0"
            isBg={true}
            src={get(brand, 'backgroundImage')}
          />
          <Nav brand={brand} />
          <Routes location={location} />
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
