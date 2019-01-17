import ContainerBase from 'lib/ContainerBase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withConfig from 'lib/withConfig';

class GenericPageContainer extends ContainerBase {
  view = import('views/GenericPageView');
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default withConfig(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GenericPageContainer)
);
