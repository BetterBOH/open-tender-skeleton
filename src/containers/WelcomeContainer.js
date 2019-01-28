import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withConfig from 'lib/withConfig';

class WelcomeContainer extends ContainerBase {
  view = import('views/WelcomeView');
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default withConfig(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WelcomeContainer)
);
