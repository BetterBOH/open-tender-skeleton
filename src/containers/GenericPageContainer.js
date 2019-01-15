import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IDLE } from 'constants/Status';
import { initializeApplication } from 'state/actions/applicationActions';
import BrandibbleClient from 'lib/BrandibbleClient';
import withContext from 'lib/withContext';

import get from 'utils/get';

class GenericPageContainer extends ContainerBase {
  view = import('views/GenericPageView');

  model = () => {
    const brandibbleConfig = get(this.props, 'config.registry.brandibble', {});
    console.log(brandibbleConfig);
    const Brandibble = new BrandibbleClient(brandibbleConfig);

    const { applicationStatus } = this.props;

    if (applicationStatus === IDLE) actions.initializeApplication(Brandibble);
  };
}

const mapStateToProps = state => ({
  applicationStatus: get(state, 'status.applicationStatus')
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      initializeApplication
    },
    dispatch
  )
});

export default withContext(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GenericPageContainer)
);
